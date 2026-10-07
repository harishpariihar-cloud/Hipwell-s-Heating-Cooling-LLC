export const businessInfo = {
  name: "Hipwell's Heating & Cooling LLC",
  phone: '208-552-7676',
  phoneLink: 'tel:2085527676',
  domain: 'https://www.hipwellshvac.com',
  address: '2260 Calkins Ave, Idaho Falls, ID 83402',
  city: 'Idaho Falls',
  state: 'Idaho',
  hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
  mapsLink: 'https://maps.app.goo.gl/LerfEuDyFKKyzb596',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.0!2d-112.0339!3d43.4666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0x0!2zM43DCnQyNyc1OS42Ik4KMTEywrcwMicwMS40Ilc!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  tagline: 'Heating & Cooling Solutions for Year-Round Comfort',
  description:
    "Hipwell's Heating & Cooling LLC is a repair-focused HVAC company serving Idaho Falls and the surrounding eastern Idaho community. With over 28 years of hands-on experience, we specialize in diagnosing and fixing the heating and cooling problems other companies can't.",
};

export const services = [
  {
    slug: 'air-conditioning-repair',
    title: 'Air Conditioning Repair',
    short: 'Fast, thorough AC diagnostics and repairs to restore your comfort.',
    icon: 'Snowflake',
    image:
      'https://images.pexels.com/photos/6471912/pexels-photo-6471912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'When your air conditioner stops cooling, makes strange noises, or runs constantly without reaching the set temperature, you need a technician who can pinpoint the real problem — not just swap parts until something works. Hipwell\u2019s specializes in detailed AC diagnostics and lasting repairs for residential and light commercial systems across eastern Idaho.',
    symptoms: [
      'Warm air blowing from vents despite the thermostat being set to cool',
      'Short cycling — the outdoor unit turns on and off rapidly without completing a full cooling cycle',
      'Unusual sounds: grinding, squealing, rattling, or buzzing from the indoor or outdoor unit',
      'Ice forming on the evaporator coil or refrigerant lines',
      'Higher than normal energy bills during summer months',
      'Weak or uneven airflow from supply registers in one or more rooms',
      'The system runs continuously but never reaches the thermostat setpoint',
    ],
    process: [
      'Call 208-552-7676 to describe the symptoms you\u2019re experiencing',
      'We discuss what you\u2019ve noticed, when it started, and any recent changes',
      'We schedule a service visit at a time that works for you',
      'On-site, we perform a full system inspection: electrical, refrigerant, airflow, and controls',
      'We explain what we found, what needs to be done, and why',
      'We complete the repair and verify the system is operating correctly before we leave',
    ],
    faqs: [
      {
        q: 'How do I know if my AC needs repair or full replacement?',
        a: 'It depends on the age of the system, the nature of the problem, and the cost of the repair versus the value of the equipment. We give you an honest assessment so you can make an informed decision — we don\u2019t push replacement when a repair will do the job.',
      },
      {
        q: 'Can you fix AC systems that other companies couldn\u2019t?',
        a: 'That\u2019s our specialty. With over 28 years of repair experience, we routinely take on systems that have been misdiagnosed or repeatedly patched. We focus on finding the root cause, not just treating the symptom.',
      },
      {
        q: 'Should I turn off my AC if it\u2019s making a loud noise?',
        a: 'Yes. Unusual sounds often indicate a mechanical or electrical problem that can cause further damage if the system keeps running. Turn it off and call us to schedule a diagnostic visit.',
      },
    ],
  },
  {
    slug: 'air-conditioning-installation',
    title: 'AC Installation and Replacement',
    short: 'Honest guidance on when to repair versus replace your cooling system.',
    icon: 'Fan',
    image:
      'https://images.pexels.com/photos/20046692/pexels-photo-20046692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'When repairs no longer make financial sense, a properly sized and installed replacement can lower your energy bills and improve comfort for years. Hipwell\u2019s helps Idaho Falls homeowners evaluate whether replacement is the right call and, if so, ensures the new system is matched to your home\u2019s actual cooling load — not oversized or undersized.',
    symptoms: [
      'Your AC is more than 12–15 years old and repairs are becoming frequent',
      'Energy bills keep rising even though your usage hasn\u2019t changed',
      'The system uses R-22 refrigerant, which is no longer manufactured',
      'Rooms cool unevenly no matter how many times the system has been serviced',
      'Repair estimates approach or exceed half the cost of a new unit',
    ],
    process: [
      'Call 208-552-7676 to discuss your current system and concerns',
      'We evaluate your existing equipment, ductwork, and home cooling needs',
      'We provide an honest comparison: repair cost vs. replacement value',
      'If replacement makes sense, we help you select a properly sized system',
      'We handle installation with attention to airflow, sealing, and refrigerant charge',
      'We test the new system thoroughly and walk you through operation and maintenance',
    ],
    faqs: [
      {
        q: 'Do you offer free replacement estimates?',
        a: 'We provide honest assessments of your current system and whether replacement makes sense. Call us at 208-552-7676 to discuss your situation and we\u2019ll let you know the best next step.',
      },
      {
        q: 'What size AC do I need for my home?',
        a: 'Proper sizing depends on square footage, insulation, window placement, ductwork condition, and local climate. We evaluate these factors rather than simply matching the old unit\u2019s capacity, which is often oversized.',
      },
      {
        q: 'How long does an AC installation take?',
        a: 'Most residential replacements can be completed in a single day, though more complex installations may take longer. We\u2019ll give you a realistic timeline before we start.',
      },
    ],
  },
  {
    slug: 'ac-maintenance',
    title: 'Air Conditioning Maintenance',
    short: 'Keep your cooling system running efficiently with seasonal tune-ups.',
    icon: 'Wrench',
    image:
      'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Regular maintenance is the most effective way to prevent unexpected breakdowns, keep energy costs in check, and extend the useful life of your air conditioner. Hipwell\u2019s performs thorough seasonal inspections that catch small problems before they become expensive repairs.',
    symptoms: [
      'You can\u2019t remember the last time your AC was professionally inspected',
      'The system seems to run longer than it used to to reach the set temperature',
      'Your summer energy bills are higher than in previous years',
      'Airflow from registers feels weaker than it should be',
      'The outdoor unit is surrounded by debris, dirt, or overgrown vegetation',
    ],
    process: [
      'Call 208-552-7676 to schedule a maintenance visit',
      'We clean the condenser coils, check refrigerant levels, and inspect electrical connections',
      'We verify airflow, thermostat operation, and overall system performance',
      'We identify any components showing wear or potential failure',
      'We explain our findings and recommend any follow-up work',
    ],
    faqs: [
      {
        q: 'How often should I have my AC serviced?',
        a: 'We recommend a professional inspection once a year, ideally in spring before the cooling season begins. If your system runs heavily through long Idaho summers, annual maintenance helps prevent mid-season breakdowns.',
      },
      {
        q: 'What\u2019s included in a maintenance visit?',
        a: 'We clean coils and components, check refrigerant charge, inspect electrical connections, test the thermostat, verify airflow, and look for any parts that may be nearing the end of their service life.',
      },
      {
        q: 'Can maintenance really lower my energy bills?',
        a: 'Yes. Dirty coils, low refrigerant, and clogged filters all force the system to work harder. A well-maintained AC runs more efficiently, which can reduce energy consumption during peak summer months.',
      },
    ],
  },
  {
    slug: 'heating-repair',
    title: 'Heating System Repair',
    short: 'Dependable heating repairs for Idaho Falls winters.',
    icon: 'Flame',
    image:
      'https://images.pexels.com/photos/6045338/pexels-photo-6045338.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Eastern Idaho winters put real demands on your heating system. When your furnace or heater isn\u2019t keeping up — or won\u2019t start at all — Hipwell\u2019s provides thorough diagnostics and reliable repairs to get your home warm again. We work on furnaces, heat pumps, and other residential heating systems.',
    symptoms: [
      'The heater blows cold air or won\u2019t turn on at all',
      'Certain rooms are noticeably colder than others',
      'The furnace short-cycles or runs constantly without warming the house',
      'You smell gas or notice a burning odor when the heat runs',
      'Pilot light issues or repeated ignition failures',
      'Unusual banging, rattling, or rumbling sounds during operation',
    ],
    process: [
      'Call 208-552-7676 to describe what your heating system is doing',
      'We discuss safety concerns first — gas, odor, or electrical smells take priority',
      'We schedule a service visit, often same-day during winter months',
      'We perform a complete diagnostic: heat exchanger, burners, controls, and airflow',
      'We explain the problem clearly and recommend the right repair',
      'We complete the fix and verify the system heats properly before we leave',
    ],
    faqs: [
      {
        q: 'I smell gas when my furnace runs. What should I do?',
        a: 'Turn off the furnace immediately, leave the home, and call your gas utility\u2019s emergency line. Once the utility has confirmed it\u2019s safe, call us to inspect and repair the furnace before you use it again.',
      },
      {
        q: 'My furnace keeps turning on and off every few minutes. What\u2019s wrong?',
        a: 'Short cycling can be caused by a dirty flame sensor, a clogged filter, an oversized furnace, or a problem with the heat exchanger. We diagnose the specific cause rather than guessing.',
      },
      {
        q: 'Can you repair older furnaces, or do I need to replace mine?',
        a: 'We repair furnaces of all ages. If your system is reaching the end of its useful life, we\u2019ll give you an honest comparison of repair cost versus replacement value so you can decide with confidence.',
      },
    ],
  },
  {
    slug: 'heating-installation',
    title: 'Heating Installation and Replacement',
    short: 'Expert evaluation and installation of new heating systems.',
    icon: 'Home',
    image:
      'https://images.pexels.com/photos/7534560/pexels-photo-7534560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'When your heating system can no longer be reliably repaired, a properly sized and installed replacement makes all the difference in winter comfort and energy costs. Hipwell\u2019s helps you determine whether replacement is the right call and ensures the new system is correctly matched to your home\u2019s heating load.',
    symptoms: [
      'Your furnace is 15+ years old and repairs are increasingly frequent',
      'Heating costs keep climbing even though your thermostat settings haven\u2019t changed',
      'The system struggles to maintain temperature during cold snaps',
      'A recent major repair quote approaches the cost of a new system',
      'Your home has hot and cold spots that adjustments haven\u2019t resolved',
    ],
    process: [
      'Call 208-552-7676 to discuss your current heating system',
      'We inspect the existing equipment, ductwork, and home heating needs',
      'We provide an honest repair-or-replace comparison',
      'If replacement is right, we help you choose a properly sized system',
      'We handle the installation with attention to duct connections, venting, and controls',
      'We test the new system and walk you through operation and care',
    ],
    faqs: [
      {
        q: 'How do I know it\u2019s time to replace my furnace instead of repairing it?',
        a: 'Key factors are age (most furnaces last 15–20 years), repair frequency and cost, energy efficiency, and comfort. If repairs cost more than half the price of a new system or your energy bills are climbing, replacement may be the better investment.',
      },
      {
        q: 'What size furnace does my home need?',
        a: 'Furnace sizing depends on square footage, insulation quality, window area, ceiling height, and local climate. We calculate the actual heating load rather than simply matching the old unit, which is often oversized.',
      },
      {
        q: 'How long does a furnace replacement take?',
        a: 'Most residential furnace replacements are completed in one day. More complex installations involving ductwork modifications or venting changes may take longer.',
      },
    ],
  },
  {
    slug: 'furnace-troubleshooting',
    title: 'Furnace Troubleshooting and Repair',
    short: 'Find the real cause of furnace problems — not just the symptoms.',
    icon: 'Settings',
    image:
      'https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Furnaces are complex systems with ignition components, flame sensors, heat exchangers, blowers, and safety controls. When something goes wrong, the symptom isn\u2019t always the problem. Hipwell\u2019s specializes in thorough furnace troubleshooting — identifying the actual root cause so the repair lasts.',
    symptoms: [
      'The furnace won\u2019t ignite or the pilot light won\u2019t stay lit',
      'The blower runs continuously even when the burners are off',
      'The furnace starts but shuts down before reaching the set temperature',
      'You hear clicking, rattling, or booming sounds when the furnace cycles',
      'The system cycles on and off too frequently (short cycling)',
      'Some rooms are warm while others stay cold',
    ],
    process: [
      'Call 208-552-7676 and describe the symptoms in as much detail as you can',
      'We ask targeted questions to narrow down the likely cause before we arrive',
      'On-site, we test each subsystem: ignition, flame sensor, gas valve, pressure switches',
      'We inspect the heat exchanger for cracks or wear — a critical safety check',
      'We identify the root cause and explain it in plain language',
      'We perform the repair and run a full cycle to confirm everything works',
    ],
    faqs: [
      {
        q: 'What is a flame sensor and why does it cause problems?',
        a: 'The flame sensor confirms that the burner has ignited. If it\u2019s dirty or worn, the furnace shuts off the gas as a safety measure, preventing the system from running. Cleaning or replacing the sensor is a common repair.',
      },
      {
        q: 'My furnace clicks but doesn\u2019t start. What could be wrong?',
        a: 'Clicking without ignition can indicate a faulty igniter, a stuck gas valve, a tripped pressure switch, or a control board issue. We test each component to find the exact cause rather than replacing parts blindly.',
      },
      {
        q: 'How do you check the heat exchanger, and why does it matter?',
        a: 'We visually inspect the heat exchanger for cracks, rust, and signs of metal fatigue. A cracked heat exchanger can allow combustion gases, including carbon monoxide, into your home\u2019s air supply. If we find a crack, we explain your options clearly.',
      },
    ],
  },
  {
    slug: 'heat-pump-services',
    title: 'Heat Pump Services',
    short: 'Diagnosis and repair of heat pump heating and cooling issues.',
    icon: 'RefreshCw',
    image:
      'https://images.pexels.com/photos/20046689/pexels-photo-20046689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Heat pumps provide both heating and cooling from a single system, making them increasingly popular in eastern Idaho. But their dual-function design means problems can show up in either mode. Hipwell\u2019s has the experience to diagnose and repair heat pumps across both heating and cooling cycles.',
    symptoms: [
      'The heat pump provides cooling but not heating, or vice versa',
      'The outdoor unit is frozen over during heating season',
      'The system switches to auxiliary heat too frequently, raising energy bills',
      'Unusual sounds from the outdoor unit during defrost cycles',
      'The heat pump never reaches the set temperature in either mode',
      'Short cycling or continuous running without adequate temperature change',
    ],
    process: [
      'Call 208-552-7676 and describe what\u2019s happening in both heating and cooling modes',
      'We ask about any recent service, thermostat changes, or weather patterns',
      'On-site, we test the reversing valve, refrigerant charge, defrost cycle, and controls',
      'We inspect both indoor and outdoor components',
      'We explain what we found and what needs repair',
      'We complete the fix and verify both heating and cooling modes work properly',
    ],
    faqs: [
      {
        q: 'Why does my heat pump freeze up in winter?',
        a: 'Some frost is normal during heating operation, and the system has a defrost cycle to clear it. But excessive ice buildup can indicate a problem with the defrost cycle, low refrigerant, or poor airflow. We diagnose which it is.',
      },
      {
        q: 'My heat pump runs constantly in cold weather. Is that normal?',
        a: 'Heat pumps run longer than furnaces by design, but if your home never reaches the setpoint and auxiliary heat runs constantly, there may be a problem with refrigerant charge, the reversing valve, or system sizing.',
      },
      {
        q: 'Can you repair heat pumps from all manufacturers?',
        a: 'We work on most residential heat pump brands. If you\u2019re not sure about yours, call us at 208-552-7676 with the make and model and we\u2019ll let you know.',
      },
    ],
  },
  {
    slug: 'hvac-diagnostics',
    title: 'HVAC System Diagnostics',
    short: 'Comprehensive system evaluation when something isn\u2019t right.',
    icon: 'Search',
    image:
      'https://images.pexels.com/photos/6471911/pexels-photo-6471911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'When your HVAC system isn\u2019t performing right but the cause isn\u2019t obvious, a thorough diagnostic is the key to solving the problem without guesswork. Hipwell\u2019s performs comprehensive system evaluations that cover every subsystem — electrical, mechanical, refrigerant, airflow, and controls — to identify what\u2019s actually going wrong.',
    symptoms: [
      'Your system has been serviced multiple times but the problem keeps coming back',
      'Comfort issues like uneven temperatures or poor airflow that no one has been able to resolve',
      'Energy bills have increased but no specific malfunction has been identified',
      'The system behaves differently in different weather conditions',
      'You want a second opinion after another company\u2019s diagnosis',
    ],
    process: [
      'Call 208-552-7676 and describe the issue and its history',
      'We ask about previous repairs, system age, and any patterns you\u2019ve noticed',
      'On-site, we perform a full-system diagnostic across all subsystems',
      'We document our findings and explain each issue in plain language',
      'We recommend repairs in priority order — safety first, then comfort and efficiency',
      'We answer any questions and help you make an informed decision',
    ],
    faqs: [
      {
        q: 'What\u2019s the difference between a diagnostic and a repair visit?',
        a: 'A diagnostic identifies the root cause of a problem. Once we know what\u2019s wrong, we explain the needed repair and its cost. Many repairs can be completed during the same visit if you approve the work.',
      },
      {
        q: 'I\u2019ve had multiple repairs and the problem persists. Can you help?',
        a: 'Yes. This is one of our core strengths. We specialize in finding the root cause of recurring problems that other companies haven\u2019t been able to resolve. We approach the system fresh and test everything systematically.',
      },
      {
        q: 'Do you charge for a diagnostic even if I decide not to repair?',
        a: 'The diagnostic visit covers the time and expertise to evaluate your system and identify the problem. Call us at 208-552-7676 and we\u2019ll explain how it works before scheduling.',
      },
    ],
  },
  {
    slug: 'thermostat-services',
    title: 'Thermostat Troubleshooting and Installation',
    short: 'Solve comfort problems that start at the control panel.',
    icon: 'Thermometer',
    image:
      'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Your thermostat is the brain of your HVAC system. When it\u2019s miswired, malfunctioning, or poorly placed, your heating and cooling won\u2019t work right no matter how good the rest of the system is. Hipwell\u2019s troubleshoots thermostat issues and installs replacements — including programmable and smart models — correctly configured for your specific system.',
    symptoms: [
      'The HVAC system doesn\u2019t respond to thermostat settings',
      'Temperature readings on the thermostat don\u2019t match the actual room temperature',
      'The system short-cycles or runs at the wrong times',
      'The thermostat screen is blank, unresponsive, or showing error codes',
      'You recently had a new HVAC system installed and the thermostat isn\u2019t working right',
      'You want to upgrade to a programmable or smart thermostat',
    ],
    process: [
      'Call 208-552-7676 and describe what the thermostat is doing',
      'We ask about your HVAC system type and thermostat model',
      'On-site, we test the thermostat, wiring, and communication with the HVAC equipment',
      'If the thermostat is the problem, we explain repair or replacement options',
      'For new installations, we verify compatibility and configure the thermostat correctly',
      'We test the system in both heating and cooling modes to confirm proper operation',
    ],
    faqs: [
      {
        q: 'Can any smart thermostat work with my HVAC system?',
        a: 'Not necessarily. Compatibility depends on your system type (conventional, heat pump, multi-stage), available wires, and voltage. We verify compatibility before recommending a specific model.',
      },
      {
        q: 'My thermostat says one temperature but the room feels different. Why?',
        a: 'This can be caused by a poorly calibrated thermostat, a thermostat installed in a bad location (near a vent, window, or heat source), or an airflow issue in the room. We diagnose the actual cause.',
      },
      {
        q: 'Will a new thermostat really improve my comfort?',
        a: 'A properly configured programmable or smart thermostat can improve comfort and reduce energy waste by matching heating and cooling to your schedule. But a thermostat can\u2019t fix underlying HVAC problems — if the system itself isn\u2019t working right, we\u2019ll identify that too.',
      },
    ],
  },
  {
    slug: 'preventive-maintenance',
    title: 'Preventive HVAC Maintenance',
    short: 'Year-round tune-ups that prevent breakdowns and extend system life.',
    icon: 'ShieldCheck',
    image:
      'https://images.pexels.com/photos/5463582/pexels-photo-5463582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'The best repair is the one you never need. Preventive maintenance catches wear and minor issues before they become mid-season breakdowns. Hipwell\u2019s provides thorough heating and cooling tune-ups that keep your equipment running efficiently and help you avoid the cost and inconvenience of emergency repairs.',
    symptoms: [
      'You haven\u2019t had your HVAC system professionally inspected in over a year',
      'Your system seems to work harder than it used to',
      'Energy bills have been gradually increasing',
      'You\u2019ve had one or more unexpected repairs in the past year',
      'You want to extend the life of your current equipment',
    ],
    process: [
      'Call 208-552-7676 to schedule a maintenance visit',
      'We perform a full inspection of your heating and cooling equipment',
      'We clean coils, check refrigerant levels, inspect electrical components, and test controls',
      'We verify airflow, thermostat operation, and overall performance',
      'We identify any components showing wear or potential failure',
      'We explain our findings and recommend any follow-up work in priority order',
    ],
    faqs: [
      {
        q: 'How often should I schedule preventive maintenance?',
        a: 'For most systems, we recommend two visits per year — one in spring for the cooling side and one in fall for the heating side. This keeps both modes operating at their best heading into peak seasons.',
      },
      {
        q: 'Can maintenance prevent all breakdowns?',
        a: 'No service can guarantee you\u2019ll never have a breakdown, but regular maintenance significantly reduces the likelihood. More importantly, it catches small problems early — when they\u2019re inexpensive to fix — and keeps your system running efficiently.',
      },
      {
        q: 'Is maintenance worth it if my system is still fairly new?',
        a: 'Yes. Even new systems benefit from annual inspections. Maintaining proper refrigerant charge, clean coils, and correct airflow from the start helps your equipment perform as designed and protects your investment over its full service life.',
      },
    ],
  },
];

export const serviceAreas = [
  {
    slug: 'idaho-falls',
    name: 'Idaho Falls',
    primaryService: 'HVAC Diagnostics',
    description:
      'As our home base, Idaho Falls is where Hipwell\u2019s Heating & Cooling provides complete HVAC diagnostic and repair services. From the Calkins Avenue shop, we serve homeowners throughout Idaho Falls — diagnosing heating and cooling problems, performing repairs, and helping residents make informed decisions about their HVAC systems.',
  },
  {
    slug: 'rexburg',
    name: 'Rexburg',
    primaryService: 'Heating Repair',
    description:
      'Rexburg\u2019s cold winters demand reliable heating. Hipwell\u2019s provides heating system repair and furnace troubleshooting services to Rexburg residents, with the same thorough diagnostic approach we\u2019re known for in Idaho Falls. If your furnace isn\u2019t keeping up with the cold, we can help identify and fix the problem.',
  },
  {
    slug: 'ammon',
    name: 'Ammon',
    primaryService: 'AC Repair',
    description:
      'Ammon residents trust Hipwell\u2019s for air conditioning repair when summer heat puts demands on their cooling systems. We diagnose and repair AC issues — from weak airflow to short cycling to warm-air problems — with the attention to root-cause troubleshooting that sets us apart.',
  },
  {
    slug: 'shelley',
    name: 'Shelley',
    primaryService: 'Furnace Troubleshooting',
    description:
      'In Shelley, Hipwell\u2019s provides furnace troubleshooting and heating repair services. When your furnace won\u2019t ignite, short-cycles, or doesn\u2019t warm your home evenly, our diagnostic-first approach identifies the actual cause — so the repair we make is the one that solves the problem.',
  },
  {
    slug: 'blackfoot',
    name: 'Blackfoot',
    primaryService: 'Heat Pump Services',
    description:
      'Hipwell\u2019s serves Blackfoot homeowners with heat pump diagnosis and repair, along with general HVAC troubleshooting. Whether your heat pump isn\u2019t heating properly, freezes over in winter, or switches to auxiliary heat too often, we have the experience to find and fix the issue.',
  },
  {
    slug: 'rigby',
    name: 'Rigby',
    primaryService: 'AC Maintenance',
    description:
      'For Rigby residents, Hipwell\u2019s provides air conditioning maintenance and repair services. Seasonal tune-ups keep your cooling system running efficiently through Idaho summers, while our repair services address the issues that come up when something goes wrong.',
  },
  {
    slug: 'ucon',
    name: 'Ucon',
    primaryService: 'HVAC Diagnostics',
    description:
      'Hipwell\u2019s brings comprehensive HVAC diagnostics to Ucon homeowners. When your heating or cooling system isn\u2019t performing right and the cause isn\u2019t obvious, our full-system evaluation covers every subsystem to identify what\u2019s actually going wrong.',
  },
];

export const homeFaqs = [
  {
    q: 'What areas does Hipwell\u2019s Heating & Cooling serve?',
    a: 'We\u2019re based in Idaho Falls and serve the surrounding eastern Idaho community, including Rexburg, Ammon, Shelley, Blackfoot, Rigby, and Ucon. If you\u2019re not sure whether we cover your area, call us at 208-552-7676.',
  },
  {
    q: 'Does Hipwell\u2019s specialize in repairs or installations?',
    a: 'We are a repair-focused company. While we do handle system replacements when that\u2019s the right call for the customer, our core strength is diagnosing and fixing HVAC problems — especially the ones other companies haven\u2019t been able to resolve.',
  },
  {
    q: 'How quickly can you come out for a repair?',
    a: 'We do our best to schedule service visits promptly, especially during extreme weather. Call us at 208-552-7676 and we\u2019ll let you know our current availability.',
  },
  {
    q: 'What types of HVAC systems do you work on?',
    a: 'We work on most residential heating and cooling systems, including central air conditioners, furnaces, heat pumps, and thermostats. If you have a specific system or brand, call us and we\u2019ll confirm whether we can help.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'We provide honest assessments of your system and what it needs. For specific repair or replacement work, call us at 208-552-7676 to discuss your situation and we\u2019ll explain how we handle pricing.',
  },
  {
    q: 'Can you fix a system that another company couldn\u2019t?',
    a: 'Yes — that\u2019s one of our specialties. With over 28 years of repair experience, we routinely take on systems that have been misdiagnosed or repeatedly patched. We focus on finding the root cause, not just treating the symptom.',
  },
];

export const commonProblems = [
  {
    title: 'Uneven Temperatures',
    icon: 'ThermometerSun',
    description:
      'Some rooms are too hot while others are too cold. This can be caused by ductwork issues, airflow imbalances, zoning problems, or a system that isn\u2019t properly sized for your home. We diagnose the actual cause rather than guessing.',
  },
  {
    title: 'Unusual Noises',
    icon: 'Volume2',
    description:
      'Grinding, squealing, rattling, or banging sounds from your HVAC system are warning signs. They can indicate anything from a loose belt to a failing motor to a cracked heat exchanger. Don\u2019t ignore them — call for a diagnostic.',
  },
  {
    title: 'Weak Airflow',
    icon: 'Wind',
    description:
      'If the air coming from your registers feels weak, the problem could be a clogged filter, a failing blower motor, ductwork leaks, or a frozen evaporator coil. We test each possibility to find the real cause.',
  },
  {
    title: 'System Short Cycling',
    icon: 'RefreshCw',
    description:
      'When your system turns on and off rapidly without completing a full cycle, it wastes energy and can damage components. Causes include dirty sensors, oversized equipment, refrigerant issues, or electrical problems.',
  },
  {
    title: 'Rising Energy Bills',
    icon: 'TrendingUp',
    description:
      'If your energy bills are climbing but your usage hasn\u2019t changed, your HVAC system may be losing efficiency. Dirty coils, low refrigerant, aging components, or duct leaks can all drive up energy costs without obvious comfort changes.',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Call Us',
    description: 'Pick up the phone and call 208-552-7676. Tell us what you\u2019re experiencing with your heating or cooling system.',
    icon: 'Phone',
  },
  {
    step: 2,
    title: 'Discuss the Issue',
    description: 'We listen carefully and ask targeted questions to understand the problem and its history before we even arrive.',
    icon: 'MessageSquare',
  },
  {
    step: 3,
    title: 'Arrange Service',
    description: 'We schedule a visit at a time that works for you. On-site, we diagnose thoroughly and explain what needs to be done.',
    icon: 'Calendar',
  },
];

export const whyChooseUs = [
  {
    title: 'Repair-Focused Expertise',
    description:
      'We specialize in repairs, not replacements. When we recommend a repair, it\u2019s because it\u2019s the right fix — not a quick patch to keep the system running until the next call.',
    icon: 'Wrench',
  },
  {
    title: 'Root-Cause Diagnostics',
    description:
      'We don\u2019t swap parts until something works. We test systematically to find the actual cause of the problem, so the repair we make addresses the real issue.',
    icon: 'Search',
  },
  {
    title: 'Clear Communication',
    description:
      'We explain what we found, what needs to be done, and why — in plain language. You\u2019ll never be left guessing about what\u2019s wrong with your system or what you\u2019re paying for.',
    icon: 'MessageSquare',
  },
  {
    title: '28+ Years of Experience',
    description:
      'With over 28 years of hands-on HVAC repair experience, we\u2019ve seen — and fixed — problems that other companies couldn\u2019t diagnose or resolve.',
    icon: 'Award',
  },
  {
    title: 'Honest Assessments',
    description:
      'If a repair makes sense, we tell you. If replacement is the better investment, we tell you that too. We give you the information you need to make the right decision for your home and budget.',
    icon: 'Heart',
  },
  {
    title: 'Residential & Commercial',
    description:
      'We work on both residential and light commercial HVAC systems, bringing the same thorough diagnostic approach to every job regardless of system size.',
    icon: 'Building2',
  },
];
