/**
 * @typedef {Object} ProcessStep
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {Object} ServiceFaq
 * @property {string} question
 * @property {string} answer
 */

/**
 * @typedef {Object} Service
 * @property {string} slug
 * @property {string} code
 * @property {string} icon
 * @property {string} overviewImage
 * @property {string} title
 * @property {string} tagline
 * @property {string} overview
 * @property {string} description
 * @property {string[]} keyFeatures
 * @property {string[]} deliverables
 * @property {string[]} benefits
 * @property {ProcessStep[]} process
 * @property {string[]} industries
 * @property {ServiceFaq[]} faqs
 */

export const allServices = [
  {
    slug: 'project-management-consultancy',
    code: 'PM',
    icon: 'BuildingOffice2Icon',
    overviewImage: '/assets/images/services/project-management-consultancy.jpeg',
    title: 'Project Management Consultancy',
    tagline: 'End-to-end delivery oversight from concept to commissioning',
    overview:
      'Comprehensive PMC services covering project planning, execution monitoring, quality assurance, cost control, and commissioning for residential, commercial, industrial, and government projects.',
    description:
      'Our PMC team sits between the client, design consultants, and contractors as a single point of accountability - translating design intent into a buildable schedule, tracking cost and quality against that schedule daily, and resolving conflicts before they become delays. We have carried projects from feasibility through defect-liability closeout across housing, institutional, and infrastructure sectors, working within CPWD, PWD, and private developer frameworks alike.',
    keyFeatures: [
      'Single point of accountability across design and construction teams',
      'Integrated cost, time, and quality tracking dashboards',
      'Vendor and contractor coordination and bid evaluation',
      'Proactive risk registers to avoid disputes and claims',
      'Statutory liaison with municipal and planning authorities',
      'Structured handover and defect-liability period management',
    ],
    deliverables: [
      'Project Master Schedule',
      'Cost & Resource Planning',
      'Quality Assurance Plan',
      'Progress Reports',
      'Risk Register & Mitigation Plan',
      'Contractor Bid Evaluation',
      'Change Order Tracking',
      'Commissioning Checklist',
      'Handover Documentation',
    ],
    benefits: [
      'Reduced project overruns',
      'Single-point accountability',
      'Risk mitigation',
      'Regulatory compliance',
      'Improved cash-flow predictability',
      'Streamlined stakeholder communication',
    ],
    process: [
      {
        title: 'Inception & Feasibility',
        description: 'Reviewing project brief, budget, and site constraints to establish a realistic delivery framework.',
      },
      {
        title: 'Design Coordination',
        description: 'Aligning architectural, structural, and MEP consultants around a single, clash-free design program.',
      },
      {
        title: 'Procurement Support',
        description: 'Structuring tender packages, evaluating bids, and finalizing contractor and vendor appointments.',
      },
      {
        title: 'Construction Supervision',
        description: 'On-site monitoring of quality, safety, and progress against the master schedule.',
      },
      {
        title: 'Testing & Commissioning',
        description: 'Verifying systems and finishes meet specification ahead of statutory sign-off.',
      },
      {
        title: 'Handover & DLP',
        description: 'Managing snag closure, documentation handover, and defect-liability period follow-through.',
      },
    ],
    industries: [
      'Residential & Mass Housing',
      'Commercial Complexes',
      'Institutional Campuses',
      'Government Infrastructure',
      'Industrial Facilities',
    ],
    faqs: [
      {
        question: 'At what stage should a PMC be brought on board?',
        answer:
          'Ideally at feasibility stage, before design finalization - this lets us shape the schedule and budget around a buildable design rather than reworking one after the fact. We do also join mid-project for recovery and turnaround assignments.',
      },
      {
        question: 'Do you manage multiple contractors on one site?',
        answer:
          'Yes. Multi-contractor coordination - civil, MEP, facade, landscape - is one of the core reasons clients bring in a PMC, since interface clashes are the most common source of delay.',
      },
      {
        question: 'How do you handle cost overruns from design changes?',
        answer:
          'Every change is routed through a formal change-order process with cost and schedule impact assessed before approval, so overruns are visible and authorized rather than discovered at the end.',
      },
    ],
  },
  {
    slug: 'structural-engineering',
    code: 'S',
    icon: 'CubeIcon',
    overviewImage: '/assets/images/services/structural-engineering.jpeg',
    title: 'Structural Engineering',
    tagline: 'Precision analysis and design for structures that endure',
    overview:
      'Analysis, design, and detailing of RCC, pre-stressed, steel, and composite structures including high-rise buildings, industrial sheds, bridges, and retaining structures.',
    description:
      'Our structural team combines rigorous finite-element analysis with practical detailing experience gained across residential towers, institutional campuses, bridges, and industrial structures. Every design is developed to resist the governing gravity, seismic, and wind loads for its site, then value-engineered to reduce material consumption without compromising code compliance or long-term durability.',
    keyFeatures: [
      'RCC, steel, composite, and pre-stressed structural systems',
      'Advanced FEM-based analysis using ETABS and STAAD.Pro',
      'Seismic and wind load engineering for tall structures',
      'Foundation and retaining structure design for varied soil conditions',
      'Value engineering for material and cost optimization',
      'Independent peer review and proof-checking of designs',
    ],
    deliverables: [
      'Structural Analysis Reports',
      'Design Drawings',
      'Bar Bending Schedules',
      'Foundation Design',
      'Seismic Analysis Report',
      'Connection Design Details',
      'Retrofit & Strengthening Schemes',
      'Stability Certificates',
    ],
    benefits: [
      'Code-compliant designs',
      'Optimized material usage',
      'Seismic safety',
      'Long-term durability',
      'Reduced construction cost through optimization',
      'Extended service life',
    ],
    process: [
      {
        title: 'Soil Investigation Review',
        description: 'Assessing geotechnical reports to determine safe bearing capacity and foundation type.',
      },
      {
        title: 'Load Analysis',
        description: 'Establishing gravity, seismic, wind, and special loads applicable to the structure and site.',
      },
      {
        title: 'Structural Modeling',
        description: 'Building a 3D analytical model to verify strength, stiffness, and stability under all load combinations.',
      },
      {
        title: 'Design & Detailing',
        description: 'Sizing members and preparing reinforcement/connection details for construction.',
      },
      {
        title: 'Drawing Approval',
        description: 'Coordinating with architects and authorities to finalize issued-for-construction drawings.',
      },
    ],
    industries: [
      'High-rise Residential',
      'Industrial Sheds & Warehouses',
      'Bridges & Flyovers',
      'Retaining & Earth Structures',
      'Institutional Buildings',
    ],
    faqs: [
      {
        question: 'Which software do you use for structural analysis?',
        answer:
          'Primarily ETABS and STAAD.Pro for building and bridge analysis, supported by SAFE for foundation and slab design, depending on the structure type.',
      },
      {
        question: 'Can you design retrofits for existing buildings?',
        answer:
          'Yes - we carry out structural audits, capacity assessments, and prepare strengthening schemes for buildings needing seismic retrofit or damage repair.',
      },
      {
        question: 'How do you approach cost optimization in design?',
        answer:
          'Through iterative modeling that trims member sizes and reinforcement congestion without violating code checks, along with reviewing alternate structural systems where a lighter option is viable.',
      },
    ],
  },
  {
    slug: 'architecture',
    code: 'A',
    icon: 'HomeIcon',
    overviewImage: '/assets/images/services/architecture.jpeg',
    title: 'Architecture',
    tagline: 'Design that balances function, form, and context',
    overview:
      'Functional and aesthetically driven architectural design for residential complexes, commercial spaces, institutional buildings, and public infrastructure.',
    description:
      'We approach architecture as the resolution of climate, context, and use into a coherent built form. Our teams develop everything from massing and facade concepts through detailed working drawings, coordinating closely with structural and MEP disciplines so that design intent survives intact through to construction - and through to the statutory approvals that let it get built.',
    keyFeatures: [
      'Climate-responsive massing and building orientation',
      'Space planning for efficiency, flow, and daylighting',
      'Facade concept development and material detailing',
      'Sustainable and passive design strategies',
      'Interior layout and landscape integration',
      '3D visualization and client walkthroughs',
    ],
    deliverables: [
      'Conceptual Design',
      'Working Drawings',
      'Interior Layouts',
      '3D Visualizations',
      'Landscape Design',
      'Facade Detailing',
      'Statutory Drawing Sets',
      'Signage & Wayfinding',
      'Regulatory Approvals',
    ],
    benefits: [
      'Context-sensitive design',
      'Space optimization',
      'Sustainable materials',
      'Regulatory compliance',
      'Enhanced user experience',
      'Higher resale / rental value',
    ],
    process: [
      {
        title: 'Brief Understanding',
        description: 'Clarifying client requirements, site conditions, and regulatory constraints before design begins.',
      },
      {
        title: 'Concept Design',
        description: 'Developing massing, zoning, and facade concepts for client review and selection.',
      },
      {
        title: 'Detailed Design',
        description: 'Resolving layouts, materials, and systems in coordination with structural and MEP consultants.',
      },
      {
        title: 'Drawing Production',
        description: 'Preparing construction-ready drawing sets and specifications.',
      },
      {
        title: 'Approval Liaison',
        description: 'Coordinating submissions and follow-ups with municipal and planning authorities.',
      },
    ],
    industries: ['Residential Townships', 'Commercial & Retail', 'Institutional Campuses', 'Hospitality'],
    faqs: [
      {
        question: 'Do you handle statutory approvals as well as design?',
        answer:
          'Yes - our architecture team prepares and submits drawing sets for municipal, fire, and environmental approvals, and liaises through to sanction.',
      },
      {
        question: 'Can you work with an existing structural design?',
        answer:
          'We can design architecture to fit an existing structural grid, or work concurrently with our own structural team for a fully integrated design.',
      },
      {
        question: 'Do you provide interior design services?',
        answer:
          'We provide interior layout and specification for common areas and typical units as part of the architectural scope; full interior fit-out design can be scoped separately.',
      },
    ],
  },
  {
    slug: 'urban-planning',
    code: 'UP',
    icon: 'MapIcon',
    overviewImage: '/assets/images/services/urban-planning.jpeg',
    title: 'Urban Planning',
    tagline: 'Shaping sustainable growth for cities and regions',
    overview:
      'Comprehensive urban planning services including development plans, master plans, township layouts, and land use studies for sustainable urban and peri-urban growth.',
    description:
      'Our urban planning practice works at the scale of cities and regions - translating growth projections and policy goals into land use frameworks, zoning regulations, and phased infrastructure plans. We combine GIS-based spatial analysis with on-ground stakeholder consultation so that plans are both technically sound and locally workable.',
    keyFeatures: [
      'Land use zoning and density planning',
      'Regional connectivity and transit-oriented design',
      'Infrastructure demand forecasting',
      'GIS-based spatial and terrain analysis',
      'Public consultation and participatory planning',
      'Policy and regulatory drafting support',
    ],
    deliverables: [
      'Master Plans',
      'Zoning Regulations',
      'Infrastructure Demand Studies',
      'Environmental Impact Assessment',
      'GIS Base Maps',
      'Transit-Oriented Development Framework',
      'Housing & Land Use Policy',
      'Development Control Rules',
    ],
    benefits: [
      'Sustainable growth',
      'Infrastructure optimization',
      'Community livability',
      'Policy compliance',
      'Balanced regional development',
      'Reduced infrastructure duplication cost',
    ],
    process: [
      {
        title: 'Data Collection & Survey',
        description: 'Gathering demographic, land use, and infrastructure baseline data for the planning area.',
      },
      {
        title: 'Existing Condition Analysis',
        description: 'Mapping current land use, connectivity, and infrastructure gaps against future demand.',
      },
      {
        title: 'Vision Formulation',
        description: 'Establishing growth vision and planning objectives with stakeholders and authorities.',
      },
      {
        title: 'Plan Preparation',
        description: 'Drafting zoning, land use, and infrastructure plans consistent with the agreed vision.',
      },
      {
        title: 'Stakeholder Consultation',
        description: 'Presenting and refining the plan through public hearings and authority review.',
      },
    ],
    industries: [
      'Municipal Corporations',
      'Regional Development Authorities',
      'Smart City Missions',
      'Special Planning Authorities',
    ],
    faqs: [
      {
        question: 'What is the typical timeline for a master plan?',
        answer:
          'Depending on the scale of the planning area, master plans typically take 6 to 18 months from data collection through to final plan approval, including consultation cycles.',
      },
      {
        question: 'Do you work directly with government planning authorities?',
        answer:
          'Yes - much of our urban planning work is delivered as consultants to development authorities and municipal corporations, working within their statutory planning frameworks.',
      },
      {
        question: 'How is public consultation incorporated into the plan?',
        answer:
          'We run structured stakeholder sessions at key milestones - vision formulation and draft plan review - so community input is reflected before the plan is finalized.',
      },
    ],
  },
  {
    slug: 'roads-and-bridges',
    code: 'RB',
    icon: 'TruckIcon',
    overviewImage: '/assets/images/services/roads-and-bridges.jpeg',
    title: 'Roads & Bridges',
    tagline: 'Engineering safe, efficient, and durable transport corridors',
    overview:
      'Highway planning, road design, bridge engineering, and traffic studies for state highways, national highways, and urban roads.',
    description:
      'From alignment studies through to detailed pavement and bridge design, our transportation engineering team designs corridors that balance safety, capacity, and lifecycle cost. Traffic modeling and road safety audits inform every geometric decision, while structural design of bridges and culverts follows current IRC codes for durability under Indian loading and climate conditions.',
    keyFeatures: [
      'Horizontal and vertical alignment optimization',
      'Pre-stressed and RCC bridge superstructure design',
      'Pavement design - flexible and rigid',
      'Junction and intersection geometric design',
      'Traffic simulation and capacity analysis',
      'Road safety audits',
    ],
    deliverables: [
      'Alignment Studies',
      'Geometric Design',
      'Bridge Design Reports',
      'Traffic Impact Assessment',
      'Road Safety Audit Report',
      'Bridge Load Rating',
      'Drainage & Culvert Design',
      'Pavement Design',
    ],
    benefits: [
      'Safe road geometry',
      'Cost-effective pavements',
      'Reduced maintenance',
      'Improved connectivity',
      'Lower lifecycle maintenance cost',
      'Improved road safety index',
    ],
    process: [
      {
        title: 'Topographic Survey',
        description: 'Capturing existing terrain, utilities, and constraints along the proposed corridor.',
      },
      {
        title: 'Traffic Studies',
        description: 'Collecting and projecting traffic volumes to size the road and structures correctly.',
      },
      {
        title: 'Alignment Finalization',
        description: 'Selecting the optimal horizontal and vertical alignment balancing cost, land, and safety.',
      },
      {
        title: 'Detailed Design',
        description: 'Preparing pavement, drainage, and bridge design ready for construction.',
      },
      {
        title: 'Tender Documents',
        description: 'Compiling drawings, specifications, and BOQs for the bidding process.',
      },
    ],
    industries: ['State & National Highways', 'Urban Arterial Roads', 'Railway Over/Under Bridges', 'Expressways'],
    faqs: [
      {
        question: 'Do you design both flexible and rigid pavements?',
        answer:
          'Yes - pavement type is selected based on traffic loading, subgrade strength, and lifecycle cost analysis, and we design to IRC:37 (flexible) or IRC:58 (rigid) as applicable.',
      },
      {
        question: 'What is a road safety audit and when is it done?',
        answer:
          'It is an independent review of the design against crash-risk factors - sight lines, junction geometry, signage - carried out at design stage and again post-construction.',
      },
      {
        question: 'Can you design bridges over existing rail or road infrastructure?',
        answer:
          'Yes, including railway over-bridges and flyovers, coordinated with the relevant railway or highway authority for clearances and construction staging.',
      },
    ],
  },
  {
    slug: 'water-supply-engineering',
    code: 'WS',
    icon: 'BeakerIcon',
    overviewImage: '/assets/images/services/water-supply-engineering.jpeg',
    title: 'Water Supply Engineering',
    tagline: 'Reliable water delivery from source to tap',
    overview:
      'Design of water supply schemes, distribution networks, water treatment plants, overhead tanks, and pump houses for urban and rural communities.',
    description:
      'We design complete water supply systems - from source assessment and treatment through to the last-mile distribution network - using hydraulic modeling to size every pipe, pump, and tank correctly. Our focus extends beyond initial design to non-revenue water reduction and DMA zoning, so systems remain efficient and equitable as they age.',
    keyFeatures: [
      'Source-to-consumer hydraulic modeling',
      'Water treatment plant process design',
      'Distribution network zoning (District Metering Areas)',
      'Pump house and overhead tank design',
      'SCADA-based monitoring integration',
      'Leak detection and NRW reduction strategy',
    ],
    deliverables: [
      'Hydraulic Design',
      'Network Layout',
      'WTP Design',
      'OHT Design',
      'DMA Zoning Plan',
      'Pump Selection & Sizing Report',
      'Water Quality Monitoring Plan',
      'O&M Manual',
    ],
    benefits: [
      '24x7 water availability',
      'Reduced NRW losses',
      'Energy efficiency',
      'Safe drinking water',
      'Equitable water distribution',
      'Lower energy consumption per KL supplied',
    ],
    process: [
      {
        title: 'Demand Assessment',
        description: 'Projecting present and future water demand across the service area.',
      },
      {
        title: 'Source Identification',
        description: 'Evaluating available surface and groundwater sources for yield and quality.',
      },
      {
        title: 'System Design',
        description: 'Sizing treatment, storage, and pumping infrastructure to meet projected demand.',
      },
      {
        title: 'Hydraulic Modeling',
        description: 'Simulating network performance under peak and fire-flow conditions.',
      },
      {
        title: 'Construction Documents',
        description: 'Preparing drawings, specifications, and O&M documentation for implementation.',
      },
    ],
    industries: [
      'Municipal Water Boards',
      'Rural Water Supply Schemes',
      'Industrial Townships',
      'Airports & Institutional Campuses',
    ],
    faqs: [
      {
        question: 'How do you determine water demand for a project?',
        answer:
          'Demand is projected from population growth, per-capita consumption norms under CPHEEO guidelines, and any industrial or institutional water requirements specific to the area.',
      },
      {
        question: 'What is DMA zoning and why does it matter?',
        answer:
          'District Metering Areas divide a network into measurable zones so leakage and non-revenue water can be tracked and reduced zone by zone rather than network-wide.',
      },
      {
        question: 'Do you design for both new schemes and augmentation of existing ones?',
        answer:
          'Both - greenfield scheme design as well as capacity augmentation, rehabilitation, and NRW reduction retrofits for existing systems.',
      },
    ],
  },
  {
    slug: 'sewerage-and-stp',
    code: 'SS',
    icon: 'ArrowPathIcon',
    overviewImage: '/assets/images/services/sewerage-and-stp.jpeg',
    title: 'Sewerage & STP',
    tagline: 'Safe collection, treatment, and reuse of wastewater',
    overview:
      'Sewage collection network design, sewage treatment plant engineering, and effluent management systems compliant with CPCB and MoEF norms.',
    description:
      'Our sewerage and treatment designs cover the full chain - gravity and pumped sewer networks, treatment process selection, sludge handling, and treated-water reuse. Every design is developed to meet CPCB discharge norms with headroom for future load growth, and we support clients through commissioning and initial operation.',
    keyFeatures: [
      'Sewer network hydraulic design and slope optimization',
      'STP process selection (SBR, MBBR, ASP, and others)',
      'Sludge management and disposal planning',
      'SCADA and remote monitoring integration',
      'Odour control system design',
      'Treated water reuse planning',
    ],
    deliverables: [
      'Sewer Network Design',
      'STP Process Design',
      'Electrical & Mechanical Drawings',
      'SCADA Integration',
      'Sludge Management Plan',
      'Odour Control Design',
      'Effluent Reuse Scheme',
      'O&M Manual',
    ],
    benefits: [
      'Environmental compliance',
      'Reduced groundwater contamination',
      'Reuse-ready treated water',
      'Low OPEX',
      'Reduced river/groundwater pollution',
      'Revenue potential from treated water reuse',
    ],
    process: [
      {
        title: 'Population Projection',
        description: 'Estimating present and future sewage generation across the catchment.',
      },
      {
        title: 'Flow Estimation',
        description: 'Calculating dry and wet weather flows to size network and treatment capacity.',
      },
      {
        title: 'Treatment Process Selection',
        description: 'Choosing a treatment technology suited to influent quality, land availability, and budget.',
      },
      {
        title: 'Detailed Design',
        description: 'Preparing civil, mechanical, and electrical design for the network and treatment plant.',
      },
      {
        title: 'Commissioning Support',
        description: 'Supporting trial runs and process stabilization ahead of handover.',
      },
    ],
    industries: ['Municipal Corporations', 'Housing Societies & Townships', 'Industrial Estates', 'SEZs'],
    faqs: [
      {
        question: 'Which treatment technology do you recommend?',
        answer:
          'It depends on land availability, influent characteristics, and effluent quality targets - SBR and MBBR suit compact urban sites, while conventional ASP can be more economical where land is available.',
      },
      {
        question: 'Can treated water be reused?',
        answer:
          'Yes - with tertiary treatment, treated effluent can be reused for gardening, flushing, or industrial cooling, which we factor into the design where a reuse market exists.',
      },
      {
        question: 'How do you manage odour from treatment plants near residential areas?',
        answer:
          'Through covered treatment units, biofilters, and buffer planning at the layout stage, sized specifically for sites in close proximity to habitation.',
      },
    ],
  },
  {
    slug: 'environmental-consultancy',
    code: 'EN',
    icon: 'GlobeAltIcon',
    overviewImage: '/assets/images/services/environmental-consultancy.jpeg',
    title: 'Environmental Consultancy',
    tagline: 'Balancing development with environmental responsibility',
    overview:
      'Environmental Impact Assessments, environmental monitoring, green building consultancy, and pollution control studies for industrial and infrastructure projects.',
    description:
      'Our environmental team supports projects through the full clearance lifecycle - baseline data collection, impact prediction, mitigation planning, and public consultation - under the EIA Notification 2006 framework. We also support green building certification and ongoing environmental monitoring, helping clients maintain compliance well beyond the clearance stage.',
    keyFeatures: [
      'Baseline environmental data collection - air, water, noise, soil',
      'Impact prediction modeling',
      'Environmental Management Plan (EMP) preparation',
      'Green building rating support (IGBC / GRIHA)',
      'Biodiversity and ecological impact studies',
      'Public hearing and stakeholder engagement',
    ],
    deliverables: [
      'EIA Reports',
      'Environmental Monitoring Plans',
      'Green Building Certification Support',
      'NOC Applications',
      'Environmental Management Plan',
      'Ambient Air & Noise Monitoring Reports',
      'Biodiversity Assessment',
      'Compliance Reports',
    ],
    benefits: [
      'Regulatory clearances',
      'Reduced environmental liability',
      'Green certification',
      'Community acceptance',
      'Faster clearance turnaround',
      'Enhanced corporate ESG profile',
    ],
    process: [
      {
        title: 'Baseline Data Collection',
        description: 'Monitoring existing air, water, noise, and soil conditions at and around the site.',
      },
      {
        title: 'Impact Prediction',
        description: 'Modeling likely environmental impacts of the proposed project against baseline conditions.',
      },
      {
        title: 'Mitigation Planning',
        description: 'Developing an Environmental Management Plan to avoid, minimize, or offset identified impacts.',
      },
      {
        title: 'Report Preparation',
        description: 'Compiling the EIA report and supporting documentation for regulatory submission.',
      },
      {
        title: 'Public Consultation',
        description: 'Coordinating public hearings and incorporating feedback ahead of clearance.',
      },
    ],
    industries: [
      'Industrial & Manufacturing',
      'Infrastructure Projects',
      'Real Estate Townships',
      'Mining & Extraction',
    ],
    faqs: [
      {
        question: 'How long does the EIA clearance process typically take?',
        answer:
          'Depending on project category (A or B) and the state or central authority involved, clearance can take anywhere from 4 to 12 months, including public hearing and appraisal cycles.',
      },
      {
        question: 'Do you support green building certification alongside EIA work?',
        answer:
          'Yes - many of our EIA clients also pursue IGBC or GRIHA certification, and we align monitoring and mitigation data across both processes to avoid duplicated effort.',
      },
      {
        question: 'What happens after clearance is granted?',
        answer:
          'We continue supporting compliance reporting and monitoring obligations attached to the clearance conditions, which typically run through construction and operation.',
      },
    ],
  },
  {
    slug: 'material-testing',
    code: 'MT',
    icon: 'MagnifyingGlassIcon',
    overviewImage: '/assets/images/services/material-testing.jpeg',
    title: 'Material Testing',
    tagline: 'Verifying quality at every stage of construction',
    overview:
      'Laboratory and in-situ testing of construction materials including concrete, steel, soil, aggregate, and bituminous materials for quality assurance.',
    description:
      'Our testing team verifies material quality at every stage - from soil investigation before design through to concrete and steel testing during construction. Combining laboratory testing with in-situ non-destructive methods, we help clients catch quality issues early, when they are still inexpensive to fix.',
    keyFeatures: [
      'Concrete cube and core testing',
      'Soil classification and bearing capacity testing',
      'Steel tensile and bend testing',
      'Non-destructive testing (rebound hammer, UPV)',
      'Bituminous mix design and testing',
      'Aggregate quality assessment',
    ],
    deliverables: [
      'Test Reports',
      'Mix Design Reports',
      'Soil Investigation Reports',
      'Non-Destructive Testing Reports',
      'Concrete Mix Design Optimization',
      'Bitumen Test Reports',
      'Quality Certificates',
    ],
    benefits: [
      'Construction quality assurance',
      'Defect identification',
      'Regulatory compliance',
      'Dispute resolution',
      'Early defect detection',
      'Reduced rework and material wastage',
    ],
    process: [
      {
        title: 'Sample Collection',
        description: 'Collecting representative samples from site or batching plant per applicable standards.',
      },
      {
        title: 'Laboratory Testing',
        description: 'Conducting strength, composition, and durability tests under controlled conditions.',
      },
      {
        title: 'Data Analysis',
        description: 'Comparing results against design specifications and code requirements.',
      },
      {
        title: 'Report Generation',
        description: 'Issuing certified test reports for project records and statutory submission.',
      },
      {
        title: 'Remediation Advice',
        description: 'Recommending corrective action where results fall short of specification.',
      },
    ],
    industries: ['Building Construction', 'Highway Projects', 'Industrial Structures', 'Dam & Water Infrastructure'],
    faqs: [
      {
        question: 'How soon can concrete cube test results be issued?',
        answer:
          'Standard 7-day and 28-day strength results follow the curing period required by IS 456; expedited indicative results can be provided earlier where urgency requires it.',
      },
      {
        question: 'Do you carry out testing at our site or in a lab?',
        answer:
          'Both - sample collection and non-destructive testing are done on site, while strength and composition testing is carried out in a controlled laboratory environment.',
      },
      {
        question: 'Can you help if test results indicate a quality issue?',
        answer:
          'Yes - beyond reporting, we advise on remediation options, further investigation needed, and support if the finding leads to a wider structural review.',
      },
    ],
  },
  {
    slug: 'third-party-audits',
    code: 'TPA',
    icon: 'ClipboardDocumentCheckIcon',
    overviewImage: '/assets/images/services/third-party-audits.jpeg',
    title: 'Third Party Audits',
    tagline: 'Independent verification that protects stakeholders',
    overview:
      'Independent technical audits of ongoing and completed construction projects for quality, safety, structural integrity, and regulatory compliance on behalf of government and financial institutions.',
    description:
      'Acting independently of the design and construction teams, we verify what has actually been built against what was designed, approved, and paid for. Our audits are commonly commissioned by lenders and government agencies ahead of disbursement milestones, and cover structural safety, workmanship quality, and contract compliance.',
    keyFeatures: [
      'Structural integrity and safety audits',
      'Progress verification for disbursement milestones',
      'Quality of workmanship assessment',
      'Contract compliance review',
      'Financial and physical progress reconciliation',
      'Fire and life safety audits',
    ],
    deliverables: [
      'Audit Reports',
      'Defect Lists',
      'Safety Compliance Reports',
      'Progress Verification Reports',
      'Structural Safety Certificate',
      'Milestone Verification Report',
      'Fire Safety Audit Report',
      'Financial Audit Support',
    ],
    benefits: [
      'Objective assessment',
      'Lender confidence',
      'Risk identification',
      'Dispute prevention',
      'Protected lender/investor interests',
      'Early identification of cost/time overruns',
    ],
    process: [
      {
        title: 'Scope Finalization',
        description: 'Agreeing audit scope and reporting format with the commissioning agency.',
      },
      {
        title: 'Document Review',
        description: 'Reviewing design drawings, approvals, and contractor billing against site conditions.',
      },
      {
        title: 'Site Inspection',
        description: 'Physically verifying progress, workmanship, and safety compliance on site.',
      },
      {
        title: 'Testing & Analysis',
        description: 'Commissioning targeted material or structural testing where findings warrant it.',
      },
      {
        title: 'Report Submission',
        description: 'Issuing an independent findings report to the commissioning agency.',
      },
    ],
    industries: ['Banks & NBFCs', 'Government Agencies', 'Real Estate Developers', 'Insurance Companies'],
    faqs: [
      {
        question: 'Who typically commissions a third-party audit?',
        answer:
          'Most commonly banks and NBFCs ahead of construction-finance disbursement, along with government agencies verifying publicly funded works.',
      },
      {
        question: 'Is the audit team independent of the project design team?',
        answer:
          'Yes - independence from the original designers and contractors is a core requirement of the audit, so findings are commissioned separately and reported directly to the client.',
      },
      {
        question: 'What happens if the audit finds a safety issue?',
        answer:
          'Critical safety findings are flagged immediately, outside the standard reporting cycle, so the commissioning agency can act without waiting for the full report.',
      },
    ],
  },
  {
    slug: 'real-estate-consultancy',
    code: 'RE',
    icon: 'CurrencyRupeeIcon',
    overviewImage: '/assets/images/services/real-estate-consultancy.jpeg',
    title: 'Real Estate Consultancy',
    tagline: 'Technical clarity for confident real estate decisions',
    overview:
      'Technical due diligence, property valuation support, feasibility studies, and development advisory for real estate investors, developers, and financial institutions.',
    description:
      'We provide the technical due diligence layer behind real estate transactions and development decisions - reviewing titles and approvals, assessing development potential under local FSI/TDR rules, and benchmarking construction costs. Our reports give investors, lenders, and developers an independent view of risk before capital is committed.',
    keyFeatures: [
      'Title and approval document scrutiny',
      'FSI / TDR and development potential analysis',
      'Construction cost benchmarking',
      'Market and absorption feasibility inputs',
      'RERA compliance review',
      'Investment risk scoring',
    ],
    deliverables: [
      'Technical Due Diligence Report',
      'Feasibility Report',
      'Development Control Analysis',
      'Project Cost Estimates',
      'RERA Compliance Review',
      'FSI/TDR Potential Analysis',
      'Cost Benchmarking Report',
      'Risk Register',
    ],
    benefits: [
      'Informed investment decisions',
      'Hidden risk identification',
      'Regulatory clarity',
      'Optimized development potential',
      'RERA-ready documentation',
      'Negotiation leverage through independent data',
    ],
    process: [
      {
        title: 'Property Assessment',
        description: 'Reviewing the site, existing structures, and surrounding context.',
      },
      {
        title: 'Document Scrutiny',
        description: 'Verifying title, approvals, and encumbrance status against project records.',
      },
      {
        title: 'Regulatory Review',
        description: 'Assessing development potential and compliance under local development control rules.',
      },
      {
        title: 'Financial Analysis',
        description: 'Benchmarking costs and estimating project financial feasibility.',
      },
      {
        title: 'Advisory Report',
        description: 'Delivering a consolidated report with findings and recommendations.',
      },
    ],
    industries: ['Real Estate Developers', 'Private Equity & Funds', 'Banks & Financial Institutions', 'HNI Investors'],
    faqs: [
      {
        question: 'What does a technical due diligence report cover?',
        answer:
          'Title and approval verification, development potential under applicable FSI/TDR rules, construction cost benchmarking, and an overall risk assessment of the asset or transaction.',
      },
      {
        question: 'Do you support RERA registration and compliance?',
        answer:
          'Yes - we review project documentation and disclosures for RERA compliance and support developers in preparing registration-ready technical submissions.',
      },
      {
        question: 'Can you assess development potential for redevelopment sites?',
        answer:
          'Yes, including SRA and cluster redevelopment scenarios, factoring in applicable incentive FSI and TDR provisions specific to the location.',
      },
    ],
  },
  {
    slug: 'infrastructure-planning',
    code: 'IP',
    icon: 'BuildingStorefrontIcon',
    overviewImage: '/assets/images/services/infrastructure-planning.jpeg',
    title: 'Infrastructure Planning',
    tagline: 'Integrated frameworks for large-scale development',
    overview:
      'Integrated infrastructure planning for SEZs, industrial corridors, smart cities, and large-scale mixed-use developments including utilities, transport, and public amenities.',
    description:
      'Large developments succeed or fail on infrastructure sequencing as much as on design. We plan utilities, transport networks, and social infrastructure as an integrated system from the outset, phasing implementation against realistic investment timelines and coordinating across the multiple authorities that large-scale developments typically involve.',
    keyFeatures: [
      'Utility corridor and easement planning',
      'Multi-modal transport network design',
      'Phased development and investment sequencing',
      'Public amenity and social infrastructure planning',
      'Stormwater and green infrastructure integration',
      'Coordination across multiple approval authorities',
    ],
    deliverables: [
      'Infrastructure Master Plan',
      'Utility Layouts',
      'Traffic & Transportation Plan',
      'Cost Estimates',
      'Utility Corridor Plan',
      'Social Infrastructure Plan',
      'Investment Phasing Roadmap',
      'Phasing Plan',
    ],
    benefits: [
      'Integrated systems',
      'Reduced duplication',
      'Long-term scalability',
      'Government approval support',
      'Investor-ready infrastructure blueprint',
      'Reduced inter-agency conflicts',
    ],
    process: [
      {
        title: 'Vision & Goals',
        description: 'Establishing development objectives and infrastructure priorities with stakeholders.',
      },
      {
        title: 'Demand Forecasting',
        description: 'Projecting utility, transport, and amenity demand across the development horizon.',
      },
      {
        title: 'Concept Planning',
        description: 'Developing an integrated infrastructure concept across all sectors.',
      },
      {
        title: 'Detailed Design',
        description: 'Preparing detailed layouts and specifications for each infrastructure component.',
      },
      {
        title: 'Implementation Support',
        description: 'Supporting phased rollout, authority coordination, and construction oversight.',
      },
    ],
    industries: ['SEZs & Industrial Corridors', 'Smart City Authorities', 'Township Developers', 'Government Development Authorities'],
    faqs: [
      {
        question: 'How do you sequence infrastructure for a large multi-phase development?',
        answer:
          'By aligning utility, road, and amenity delivery with anticipated occupancy and revenue milestones, so infrastructure capacity is available exactly when each phase needs it.',
      },
      {
        question: 'Do you coordinate approvals across multiple authorities?',
        answer:
          'Yes - large infrastructure projects typically span municipal, state, and sometimes central approvals, and we manage that coordination as part of the planning scope.',
      },
      {
        question: 'Can this service integrate with an existing master plan?',
        answer:
          'Yes, we regularly plan infrastructure layers within a master plan prepared by another consultant, provided the underlying land use and zoning framework is available.',
      },
    ],
  },
];

/**
 * @param {string} slug
 * @returns {Service | undefined}
 */
export function getServiceBySlug(slug) {
  return allServices.find((service) => service.slug === slug);
}

/**
 * @param {string} slug
 * @returns {{ prev: Service | null, next: Service | null }}
 */
export function getAdjacentServices(slug) {
  const index = allServices.findIndex((service) => service.slug === slug);
  if (index === -1) return { prev: null, next: null };

  const prev = index === 0 ? allServices[allServices.length - 1] : allServices[index - 1];
  const next = index === allServices.length - 1 ? allServices[0] : allServices[index + 1];

  return { prev, next };
}