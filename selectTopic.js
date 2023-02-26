/*
Art History
Biology
Calculus AB
Calculus BC
Chemistry
Chinese Language and Culture
Comparative Government and Politics
Computer Science A
Computer Science Principles
English Language and Composition
English Literature and Composition
Environmental Science
European History
French Language and Culture
German Language and Culture
Human Geography
Italian Language and Culture
Japanese Language and Culture
Latin
Macroeconomics
Microeconomics
Music Theory
Physics 1: Algebra-Based
Physics 2: Algebra-Based
Physics C: Electricity and Magnetism
Physics C: Mechanics
Psychology
Research (Seminar)
Seminar
Spanish Language and Culture
Spanish Literature and Culture
Statistics
Studio Art: 2-D Design
Studio Art: 3-D Design
Studio Art: Drawing
United States Government and Politics
United States History
World History.
*/

// Define an object to hold the options for each AP Exam
const examOptions = {
    "art-history": [
      { value: "global-prehistory-30-40k-bce", text: "Global Prehistory: 30-40k BCE" },
      { value: "ancient-mediterranean-3500-bce-300-ce", text: "Ancient Mediterranean: 3500 BCE-300 CE" },
      { value: "early-europe-and-colonial-americas-400-1650", text: "Early Europe and Colonial Americas: 400-1650" },
      { value: "later-europe-and-americas-1600-1750", text: "Later Europe and Americas: 1600-1750" },
      { value: "indigenous-americas-1000-bce-1980-ce", text: "Indigenous Americas: 1000 BCE-1980 CE" },
      { value: "africa-2000-bce-1980-ce", text: "Africa: 2000 BCE-1980 CE" },
      { value: "west-and-central-asia-2000-bce-1980-ce", text: "West and Central Asia: 2000 BCE-1980 CE" },
      { value: "south-southeast-and-east-asia-300-bce-1980-ce", text: "South, Southeast, and East Asia: 300 BCE-1980 CE" },
      { value: "the-pacific-700-ce-1980-ce", text: "The Pacific: 700-1980 CE" },
      { value: "global-contemporary-1980-present", text: "Global Contemporary: 1980-Present" },
    ],
    "biology": [
      { value: "evolutionary-biology", text: "Evolutionary Biology" },
      { value: "ecology", text: "Ecology" },
      { value: "cellular-energetics", text: "Cellular Energetics" },
      { value: "cell-communication", text: "Cell Communication" },
      { value: "genetics-and-information-transfer", text: "Genetics and Information Transfer" },
      { value: "heredity", text: "Heredity" },
      { value: "organisms-and-populations", text: "Organisms and Populations" },
      { value: "ecosystems", text: "Ecosystems" },
      { value: "laboratory-investigations", text: "Laboratory Investigations" },
    ],
    "calculus-ab": [
      { value: "limits-and-continuity", text: "Limits and Continuity" },
      { value: "derivatives", text: "Derivatives" },
      { value: "applications-of-derivatives", text: "Applications of Derivatives" },
      { value: "integrals", text: "Integrals" },
      { value: "fundamental-theorem-of-calculus", text: "Fundamental Theorem of Calculus" },
      { value: "applications-of-integrals", text: "Applications of Integrals" },
      { value: "differential-equations", text: "Differential Equations" },
      { value: "parametric-equations-polar-coordinates-and-vector-valued-functions", text: "Parametric Equations, Polar Coordinates, and Vector-Valued Functions" },
    ],
    "calculus-bc": [
      { value: "limits-and-continuity", text: "Limits and Continuity" },
      { value: "derivatives", text: "Derivatives" },
      { value: "applications-of-derivatives", text: "Applications of Derivatives" },
      { value: "integrals", text: "Integrals" },
      { value: "fundamental-theorem-of-calculus", text: "Fundamental Theorem of Calculus" },
      { value: "applications-of-integrals", text: "Applications of Integrals" },
      { value: "sequences-series-and-parametric-equations", text: "Sequences, Series, and Parametric Equations" },
      { value: "polar-coordinates-and-vector-valued-functions", text: "Polar Coordinates and Vector-Valued Functions" },
      { value: "differential-equations", text: "Differential Equations" },
      { value: "partial-derivatives", text: "Partial Derivatives" },
      { value: "multiple-integrals", text: "Multiple Integrals" },
      { value: "vector-calculus", text: "Vector Calculus" },
    ],
    "chemistry": [
      { value: "atomic-structure-and-properties", text: "Atomic Structure and Properties" },
      { value: "molecular-and-ionic-properties", text: "Molecular and Ionic Properties" },
      { value: "intermolecular-forces-and-properties", text: "Intermolecular Forces and Properties" },
      { value: "chemical-reactions", text: "Chemical Reactions" },
      { value: "thermodynamics", text: "Thermodynamics" },
      { value: "kinetics", text: "Kinetics" },
      { value: "equilibrium", text: "Equilibrium" },
      { value: "acids-and-bases", text: "Acids and Bases" },
      { value: "applications-of-thermodynamics", text: "Applications of Thermodynamics" },
      { value: "applications-of-kinetics", text: "Applications of Kinetics" },
      { value: "applications-of-equilibrium", text: "Applications of Equilibrium" },
      { value: "organic-chemistry", text: "Organic Chemistry" },
      { value: "laboratory-investigations", text: "Laboratory Investigations" },
    ],
    "chinese-language-and-culture": [
      { value: "interpersonal-communication", text: "Interpersonal Communication" },
      { value: "interpretive-communication", text: "Interpretive Communication" },
      { value: "presentational-writing", text: "Presentational Writing" },
      { value: "presentational-speaking", text: "Presentational Speaking" },
      { value: "cultural-products-and-practices", text: "Cultural Products and Practices" },
      { value: "perspectives", text: "Perspectives" },
    ],
    "comparative-government-and-politics": [
      { value: "sovereignty-authority-and-power", text: "Sovereignty, Authority, and Power" },
      { value: "political-institutions", text: "Political Institutions" },
      { value: "citizens-society-and-the-state", text: "Citizens, Society, and the State" },
      { value: "political-and-economic-change", text: "Political and Economic Change" },
      { value: "public-policy", text: "Public Policy" },
    ],
    "computer-science-a": [    
      { value: "primitive-data-types", text: "Primitive Data Types" },    
      { value: "using-objects", text: "Using Objects" },    
      { value: "implementing-methods", text: "Implementing Methods" },    
      { value: "control-structures", text: "Control Structures" },    
      { value: "user-defined-classes", text: "User-Defined Classes" },    
      { value: "creating-classes-from-classes", text: "Creating Classes from Classes" },    
      { value: "arrays", text: "Arrays" },    { value: "arraylists", text: "ArrayLists" },    
      { value: "arrays-and-arraylists-of-objects", text: "Arrays and ArrayLists of Objects" },    
      { value: "two-dimensional-arrays", text: "Two-Dimensional Arrays" },    
      { value: "inheritance-and-polymorphism", text: "Inheritance and Polymorphism" },    
      { value: "recursion", text: "Recursion" },    
      { value: "searching-and-sorting", text: "Searching and Sorting" },    
      { value: "exceptions", text: "Exceptions" },    
      { value: "file-input-output-and-exception-handling", text: "File Input/Output and Exception Handling" },    
      { value: "abstract-classes-and-interfaces", text: "Abstract Classes and Interfaces" },    
      { value: "inner-classes", text: "Inner Classes" },  
    ],
    "computer-science-principles": [
      { value: "programming", text: "Programming" },
      { value: "data", text: "Data" },
      { value: "digital-privacy-and-security", text: "Digital Privacy and Security" },
      { value: "impacts-of-computing", text: "Impacts of Computing" },
      { value: "networking", text: "Networking" },
      { value: "the-internet", text: "The Internet" },
      { value: "global-impact", text: "Global Impact" },
    ],
    "english-language-and-composition": [
      { value: "rhetorical-analysis", text: "Rhetorical Analysis" },
      { value: "synthesis", text: "Synthesis" },
      { value: "argumentation", text: "Argumentation" },
    ],
    "english-literature-and-composition": [
      { value: "interpretation-of-imagery-language-and-tone", text: "Interpretation of Imagery, Language, and Tone" },
      { value: "close-reading", text: "Close Reading" },
      { value: "research-and-integration-of-knowledge", text: "Research and Integration of Knowledge" },
    ],
    "environmental-science": [
      { value: "earth-systems-and-resources", text: "Earth Systems and Resources" },
      { value: "the-living-world", text: "The Living World" },
      { value: "population", text: "Population" },
      { value: "land-and-water-use", text: "Land and Water Use" },
      { value: "energy-resources-and-consumption", text: "Energy Resources and Consumption" },
      { value: "pollution", text: "Pollution" },
      { value: "global-change", text: "Global Change" },
    ],
    "european-history": [
      { value: "renaissance-and-exploration", text: "Renaissance and Exploration" },
      { value: "age-of-reformation", text: "Age of Reformation" },
      { value: "absolutism-and-constitutionalism", text: "Absolutism and Constitutionalism" },
      { value: "scientific-revolution-and-enlightenment", text: "Scientific Revolution and Enlightenment" },
      { value: "french-revolution-and-napoleon", text: "French Revolution and Napoleon" },
      { value: "industrialization-and-its-effects", text: "Industrialization and Its Effects" },
      { value: "political-and-cultural-impact-of-nationalism", text: "Political and Cultural Impact of Nationalism" },
      { value: "world-war-i", text: "World War I" },
      { value: "the-interwar-years-and-world-war-ii", text: "The Interwar Years and World War II" },
      { value: "the-cold-war-and-contemporary-europe", text: "The Cold War and Contemporary Europe" },
    ],
    "french-language-and-culture": [
      { value: "global-challenges", text: "Global Challenges" },
      { value: "science-and-technology", text: "Science and Technology" },
      { value: "contemporary-life", text: "Contemporary Life" },
      { value: "personal-and-public-identities", text: "Personal and Public Identities" },
      { value: "families-and-communities", text: "Families and Communities" },
      { value: "beauty-and-aesthetics", text: "Beauty and Aesthetics" },
    ],
    "german-language-and-culture": [
      { value: "global-challenges", text: "Global Challenges" },
      { value: "science-and-technology", text: "Science and Technology" },
      { value: "contemporary-life", text: "Contemporary Life" },
      { value: "personal-and-public-identities", text: "Personal and Public Identities" },
      { value: "families-and-communities", text: "Families and Communities" },
      { value: "beauty-and-aesthetics", text: "Beauty and Aesthetics" },
    ],
    "human-geography": [
      { value: "thinking-geographically", text: "Thinking Geographically" },
      { value: "population-and-migration", text: "Population and Migration" },
      { value: "cultural-patterns-and-processes", text: "Cultural Patterns and Processes" },
      { value: "political-organization-of-space", text: "Political Organization of Space" },
      { value: "agriculture-and-rural-land-use", text: "Agriculture and Rural Land Use" },
      { value: "industrialization-and-economic-development", text: "Industrialization and Economic Development" },
      { value: "cities-and-urban-land-use", text: "Cities and Urban Land Use" },
      { value: "globalization-and-global-challenges", text: "Globalization and Global Challenges" },
    ],
    "italian-language-and-culture": [
      { value: "global-challenges", text: "Global Challenges" },
      { value: "science-and-technology", text: "Science and Technology" },
      { value: "contemporary-life", text: "Contemporary Life" },
      { value: "personal-and-public-identities", text: "Personal and Public Identities" },
      { value: "families-and-communities", text: "Families and Communities" },
      { value: "beauty-and-aesthetics", text: "Beauty and Aesthetics" },
    ],
    "japanese-language-and-culture": [
      { value: "global-issues", text: "Global Issues" },
      { value: "social-issues", text: "Social Issues" },
      { value: "personal-identity", text: "Personal Identity" },
      { value: "public-and-private-spaces", text: "Public and Private Spaces" },
      { value: "families-and-communities", text: "Families and Communities" },
      { value: "beauty-and-aesthetics", text: "Beauty and Aesthetics" },
     ],
     "latin": [
      { value: "contextual-knowledge-of-roman-history", text: "Contextual Knowledge of Roman History" },
      { value: "language-structures-and-literary-analysis", text: "Language Structures and Literary Analysis" },
      { value: "cultural-knowledge-of-the-roman-world", text: "Cultural Knowledge of the Roman World" },
    ],
    "macroeconomics": [
      { value: "basic-concepts", text: "Basic Concepts" },
      { value: "measurement-of-economic-performance", text: "Measurement of Economic Performance" },
      { value: "national-income-and-price-determination", text: "National Income and Price Determination" },
      { value: "financial-sector", text: "Financial Sector" },
      { value: "long-run-consequences-of-stabilization-policies", text: "Long-Run Consequences of Stabilization Policies" },
      { value: "economic-growth", text: "Economic Growth" },
      { value: "international-trade-and-capital-flows", text: "International Trade and Capital Flows" },
    ],
    "microeconomics": [
      { value: "basic-economic-concepts", text: "Basic Economic Concepts" },
      { value: "the-nature-and-function-of-product-markets", text: "The Nature and Function of Product Markets" },
      { value: "factor-markets", text: "Factor Markets" },
      { value: "market-failure-and-the-role-of-government", text: "Market Failure and the Role of Government" },
      { value: "efficiency,-market-failure,-and-government-intervention", text: "Efficiency, Market Failure, and Government Intervention" },
      { value: "the-distribution-of-income-and-wealth", text: "The Distribution of Income and Wealth" },
      { value: "global-interdependence", text: "Global Interdependence" },
    ],
    "music-theory": [
      { value: "aural-skills", text: "Aural Skills" },
      { value: "musical-analysis", text: "Musical Analysis" },
      { value: "composition", text: "Composition" },
      { value: "historical-and-stylistic-contexts", text: "Historical and Stylistic Contexts" },
      { value: "music-theory-skills-and-knowledge", text: "Music Theory Skills and Knowledge" },
    ],
    "physics-1-algebra-based": [
      { value: "kinematics", text: "Kinematics" },
      { value: "dynamics", text: "Dynamics" },
      { value: "circular-motion-and-gravitation", text: "Circular Motion and Gravitation" },
      { value: "energy", text: "Energy" },
      { value: "momentum", text: "Momentum" },
      { value: "simple-harmonic-motion,-waves,-and-sound", text: "Simple Harmonic Motion, Waves, and Sound" },
      { value: "electric-charge-and-electric-force", text: "Electric Charge and Electric Force" },
      { value: "dc-circuits", text: "DC Circuits" },
      { value: "mechanical-waves-and-sound", text: "Mechanical Waves and Sound" },
      { value: "electromagnetic-waves-and-optics", text: "Electromagnetic Waves and Optics" },
      { value: "atomic-and-nuclear-physics", text: "Atomic and Nuclear Physics" },
      { value: "interdisciplinary-topics", text: "Interdisciplinary Topics" },
    ],
    "physics-2-algebra-based": [
      { value: "fluid-mechanics", text: "Fluid Mechanics" },
      { value: "thermal-physics", text: "Thermal Physics" },
      { value: "electrostatics", text: "Electrostatics" },
      { value: "electric-circuits", text: "Electric Circuits" },
      { value: "magnetism-and-electromagnetism", text: "Magnetism and Electromagnetism" },
      { value: "waves-and-optics", text: "Waves and Optics" },
      { value: "atomic-and-nuclear-physics", text: "Atomic and Nuclear Physics" },
    ],
    "physics-c-electricity-and-magnetism": [
      { value: "electrostatics", text: "Electrostatics" },
      { value: "conductors,-capacitors,-dielectrics", text: "Conductors, Capacitors, Dielectrics" },
      { value: "electric-circuits", text: "Electric Circuits" },
      { value: "magnetic-fields", text: "Magnetic Fields" },
      { value: "electromagnetism", text: "Electromagnetism" },
      { value: "electromagnetic-induction", text: "Electromagnetic Induction" },
      { value: "ac-circuits", text: "AC Circuits" },
      { value: "maxwells-equations-and-electromagnetic-waves", text: "Maxwell's Equations and Electromagnetic Waves" },
    ],
    "physics-c-mechanics": [
      { value: "kinematics", text: "Kinematics" },
      { value: "newtons-laws-of-motion", text: "Newton's Laws of Motion" },
      { value: "work,-energy,-and-power", text: "Work, Energy, and Power" },
      { value: "systems-of-particles-and-linear-momentum", text: "Systems of Particles and Linear Momentum" },
      { value: "circular-motion-and-rotation", text: "Circular Motion and Rotation" },
      { value: "oscillations-and-gravitation", text: "Oscillations and Gravitation" },
      { value: "fluid-mechanics", text: "Fluid Mechanics" },
      { value: "thermodynamics", text: "Thermodynamics" },
    ],
    "psychology": [
      { value: "history-and-approaches", text: "History and Approaches" },
      { value: "research-methods", text: "Research Methods" },
      { value: "biological-bases-of-behavior", text: "Biological Bases of Behavior" },
      { value: "sensation-and-perception", text: "Sensation and Perception" },
      { value: "states-of-consciousness", text: "States of Consciousness" },
      { value: "learning", text: "Learning" },
      { value: "cognition", text: "Cognition" },
      { value: "motivation,-emotion,-and-stress", text: "Motivation, Emotion, and Stress" },
      { value: "developmental-psychology", text: "Developmental Psychology" },
      { value: "personality", text: "Personality" },
      { value: "testing-and-individual-differences", text: "Testing and Individual Differences" },
      { value: "psychological-disorders", text: "Psychological Disorders" },
      { value: "treatment-of-psychological-disorders", text: "Treatment of Psychological Disorders" },
      { value: "social-psychology", text: "Social Psychology" },
    ],
    "research-seminar": [
      { value: "identifying-a-research-question", text: "Identifying a Research Question" },
      { value: "developing-a-research-plan", text: "Developing a Research Plan" },
      { value: "conducting-a-literature-review", text: "Conducting a Literature Review" },
      { value: "collecting-data", text: "Collecting Data" },
      { value: "analyzing-data", text: "Analyzing Data" },
      { value: "presenting-research-findings", text: "Presenting Research Findings" },
    ],
    "seminar": [
      { value: "collaborative-skills", text: "Collaborative Skills" },
      { value: "research-methods", text: "Research Methods" },
      { value: "oral-presentation-and-defense-of-research", text: "Oral Presentation and Defense of Research" },
      { value: "ethical-reasoning", text: "Ethical Reasoning" },
    ],
    "spanish-language-and-culture": [
      { value: "global-challenges", text: "Global Challenges" },
      { value: "beauty-and-aesthetics", text: "Beauty and Aesthetics" },
      { value: "families-and-communities", text: "Families and Communities" },
      { value: "personal-and-public-identities", text: "Personal and Public Identities" },
      { value: "science-and-technology", text: "Science and Technology" },
    ],
    "spanish-literature-and-culture": [
      { value: "the-individual-and-society", text: "The Individual and Society" },
      { value: "traditions-and-values", text: "Traditions and Values" },
      { value: "social-and-political-organizations", text: "Social and Political Organizations" },
      { value: "nature-and-the-environment", text: "Nature and the Environment" },
    ],
    "statistics": [
      { value: "exploring-data", text: "Exploring Data" },
      { value: "sampling-and-experimental-design", text: "Sampling and Experimental Design" },
      { value: "anticipating-patterns", text: "Anticipating Patterns" },
      { value: "statistical-inference", text: "Statistical Inference" },
      { value: "confirming-models", text: "Confirming Models" },
      { value: "probability", text: "Probability" },
    ],
    "studio-art-2-d-design": [
      { value: "quality-breadth-and-concentration", text: "Quality, Breadth, and Concentration" },
    ],
    "studio-art-3-d-design": [
      { value: "quality-breadth-and-concentration", text: "Quality, Breadth, and Concentration" },
    ],
    "studio-art-drawing": [
        { value: "quality-breadth-and-concentration", text: "Quality, Breath, and Concentration" },
    ],
    "united-states-government-and-politics": [
        { value: "foundations-of-american-democracy", text: "Foundations of American Democracy" },
        { value: "interactions-among-branches-of-government", text: "Interactions Among Branches of Government" },
        { value: "civil-libertirs-and-civil-rights", text: "Civil Liberties and Civil Rights" },
        { value: "american-political-ideologies-and-beliefs", text: "American Political Ideologies and Beliefs" },
        { value: "political-participation", text: "Political Participation" },
    ],
    "united-states-history": [
        { value: "1491-1607", text: "1491-1607" },
        { value: "1607-1754", text: "1607-1754" },
        { value: "1754-1800", text: "1754-1800" },
        { value: "1800-1844", text: "1800-1844" },
        { value: "1844-1865", text: "1844-1865" },
        { value: "1865-1890", text: "1865-1890" },
        { value: "1890-1945", text: "1890-1945" },
        { value: "1945-1980", text: "1945-1980" },
        { value: "1980-present", text: "1980-Present" },
    ],
    "world-history": [
        { value: "the-global-tapestry", text: "The Global Tapestry" },
        { value: "networks-of-exchange", text: "Networks of Exchange" },
        { value: "land-based-empires", text: "Land-Based Empires" },
        { value: "transoceanic-interconnections", text: "Transoceanic Interconnections" },
        { value: "revolutions", text: "Revolutions" },
        { value: "consequences-of-industrialization", text: "Consequences of Industrailization" },
        { value: "global-conflict", text: "Global Conflict" },
        { value: "cold-war-and-decolonization", text: "Cold War and Decolonization" },
        { value: "globalization", text: "Globalization" },
    ],
};  

// Get references to the select elements
const apExamsSelect = document.getElementById('ap-exams');
const topicsSelect = document.getElementById('topics');

// Add an event listener to the apExamsSelect element
apExamsSelect.addEventListener('change', function() {
  // Clear the current options in the topicsSelect element
  topicsSelect.innerHTML = '';

  // Get the selected value from the apExamsSelect element
  const selectedExam = this.value;

  // If no exam is selected, disable the topicsSelect element and return early
  if (!selectedExam) {
    topicsSelect.disabled = true;
    return;
  }

  // Enable the topicsSelect element
  topicsSelect.disabled = false;

  // Get the options for the selected exam and add them to the topicsSelect element
  const examOptionsArray = examOptions[selectedExam];
  examOptionsArray.forEach(function(option) {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.text;
    topicsSelect.appendChild(optionElement);
  });
});
