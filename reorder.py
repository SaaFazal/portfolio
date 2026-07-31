import re

def main():
    with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Update interface
    interface_pattern = re.compile(r'(export interface Project \{.*?)(images\?: string\[\];\n\})', re.DOTALL)
    match = interface_pattern.search(content)
    new_interface = match.group(1) + "  section?: 'Client Work' | 'Engineering and Academic Projects';\n  filterCategory?: 'All' | 'Data & BI' | 'AI & ML' | 'Full Stack' | 'Systems' | 'Mobile';\n" + match.group(2)
    content = content[:match.start()] + new_interface + content[match.end():]

    start_idx = content.find('export const projects: Project[] = [\n')
    end_idx = content.rfind('\n];')
    array_content = content[start_idx + len('export const projects: Project[] = [\n'):end_idx]

    projects = []
    current_project = ""
    brace_count = 0
    in_project = False

    for line in array_content.split('\n'):
        if not in_project:
            if line.strip() == '{':
                in_project = True
                brace_count = 1
                current_project = line + '\n'
        else:
            current_project += line + '\n'
            brace_count += line.count('{') - line.count('}')
            if brace_count == 0:
                in_project = False
                # Remove trailing comma if any
                proj_str = current_project.strip()
                if proj_str.endswith(','):
                    proj_str = proj_str[:-1]
                projects.append(proj_str)
                current_project = ""

    print(f"Found {len(projects)} projects.")

    proj_dict = {}
    for p in projects:
        id_match = re.search(r"id: '(.*?)'", p)
        if id_match:
            proj_dict[id_match.group(1)] = p

    android_mobile = """  {
    id: 'android-mobile',
    title: 'Android & Mobile Development',
    description: 'Native Android applications demonstrating local-first architectures with cloud synchronization. Features include ML Kit for OCR receipt parsing and barcode scanning, CameraX for lifecycle-aware image processing, Room DB for robust offline persistence, and automated background workers (WorkManager).',
    tags: ['Java', 'Android SDK', 'CameraX', 'Google ML Kit', 'Firebase', 'Room DB', 'Mobile Development'],
    github: 'https://github.com/SaaFazal/SlipStack-Android',
    image: '/projects/slipstack/slipstack.png',
    
    details: {
      vision: 'A collection of native Android mobile applications engineered for high performance, local-first data processing, and offline resilience. Showcasing expertise in integrating complex hardware APIs like CameraX with on-device machine learning (Google ML Kit), these applications solve real-world problems—from unstructured OCR expense tracking (SlipStack) to IoT-connected HACCP commercial food safety logging (FF Smart Fridge).',
      features: [
        'Jetpack CameraX & ML Kit: Lifecycle-aware camera integrations for high-speed, on-device OCR receipt parsing and barcode scanning without main-thread latency.',
        'Intelligent Bounding-Box Parser: Custom geometric algorithm to reconstruct text rows from unstructured OCR bounding boxes.',
        'Offline-First Room Persistence: Robust SQLite abstraction supporting full offline CRUD operations, LiveData, and background syncing.',
        'Automated Background Workers: AndroidX WorkManager tasks that calculate consumption cycles to generate automated restocking lists and expiration push notifications independently of the app lifecycle.',
        'Secure Cloud Sync: Firebase Authentication paired with Firestore rules ensuring seamless, real-time cross-device sync.'
      ],
      deepDive: [
        {
          title: 'Geometric Bounding-Box Line Reconstruction',
          content: 'Implemented a geometric text reconstruction algorithm that groups individual ML Kit Text elements into physical rows using their bounding-box y-coordinates within a specific pixel tolerance (42px). This solves column misalignment on creased or angled receipts.'
        },
        {
          title: 'Real-Time Machine Vision Decoders',
          content: 'Built in-app vision readers by coupling Android Jetpack CameraX with Google ML Kit APIs (Text Recognition and Barcode Scanning). The system processes frames concurrently in the background, extracting data instantly without introducing UI lag.'
        },
        {
          title: 'Automated Restocking Lifecycle Workers',
          content: 'Implemented periodic WorkManager background tasks. These run independently of the application lifecycle, analyzing consumption intervals and compiling structured shopping lists in Room, keeping inventories balanced.'
        }
      ],
      recruiterWin: '"Built robust native Android applications utilizing CameraX, ML Kit, and offline-first Room databases to solve complex physical-world problems like receipt OCR and inventory tracking."',
      techStack: [
        { category: 'Mobile & UI', items: 'Android SDK, Java, ViewBinding, Jetpack Navigation' },
        { category: 'Machine Vision', items: 'Google ML Kit Text/Barcode APIs, Android Jetpack CameraX' },
        { category: 'Database & Sync', items: 'Android Room DB (SQLite), Firebase Auth, Cloud Firestore' },
        { category: 'Threading & Workflows', items: 'AndroidX WorkManager, LiveData, ViewModel' }
      ]
    },
    images: [
      '/projects/slipstack/Home.jpg',
      '/projects/fridge-app/Barcode Scanner.jpg',
      '/projects/slipstack/Trends.jpg',
      '/projects/fridge-app/Inventory Management.jpg'
    ],
    section: 'Engineering and Academic Projects',
    filterCategory: 'Mobile'
  }"""

    order = [
        ('phat-ops', 'Client Work', 'Full Stack'),
        ('trukbk-web', 'Client Work', 'AI & ML'),
        ('restaurant-analytics', 'Client Work', 'Data & BI'),
        ('arasan-travels', 'Client Work', 'Full Stack'),
        ('ushop-inventory', 'Client Work', 'Full Stack'),
        ('dev-insights', 'Engineering and Academic Projects', 'Data & BI'),
        ('cyclenest-api', 'Engineering and Academic Projects', 'Systems'),
        ('uni-chatbot', 'Engineering and Academic Projects', 'AI & ML'),
        ('ceptflow', 'Engineering and Academic Projects', 'AI & ML'),
        ('load-balancer', 'Engineering and Academic Projects', 'Systems'),
        ('journey-test-suite', 'Engineering and Academic Projects', 'Systems'),
        ('ntu-timetable', 'Engineering and Academic Projects', 'Systems'),
    ]

    new_projects_array = []
    for p_id, section, category in order:
        p_str = proj_dict[p_id]
        last_brace = p_str.rfind('}')
        if last_brace != -1:
            p_str = p_str[:last_brace] + f"  section: '{section}',\n    filterCategory: '{category}'\n  " + p_str[last_brace:]
            new_projects_array.append(p_str)

    new_projects_array.append(android_mobile)

    new_array_str = ',\n'.join(new_projects_array)
    new_content = content[:start_idx + len('export const projects: Project[] = [\n')] + new_array_str + '\n' + content[end_idx:]

    with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Successfully updated src/data/projects.ts")

if __name__ == '__main__':
    main()
