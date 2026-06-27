const careerData = {
    it: {
        eyebrow: 'IT preparation',
        heading: 'IT Companies Hiring Freshers',
        description: 'Click any company to see rounds, employee strength, roles, required skills, preparation tips, and PDF resources.',
        companies: [
            {"name":"TCS","roles":"Software Engineer, Ninja/Digital roles","employees":"Approx 600,000+ employees globally","rounds":"Usually 4 rounds: online test, coding/programming logic, technical interview, HR interview","skills":["Aptitude","Java or Python","SQL basics","OOPs","Communication"],"about":"TCS hires freshers for large-scale software delivery, support, digital transformation, cloud, testing, and enterprise projects. For fresher roles, the company checks logical ability, coding confidence, communication, and project understanding.","pattern":["Foundation aptitude","verbal ability","programming logic","coding question","technical interview","HR interview"],"preparation":["Practice arrays, strings, loops, functions, and basic DSA","Revise OOPs, DBMS, SQL, operating systems, and computer networks","Prepare one strong resume project explanation","Take timed aptitude mocks every week"],"pdf":"assets/pdfs/tcs-previous-year-pattern.pdf"},
            {"name":"Infosys","roles":"Systems Engineer, Specialist Programmer","employees":"Approx 330,000+ employees globally","rounds":"Usually 3 to 4 rounds: aptitude, pseudocode/coding, technical interview, HR interview","skills":["Problem solving","OOPs","DBMS","Pseudocode","Coding practice"],"about":"Infosys fresher hiring focuses on analytical ability, programming logic, communication, and trainability for software services and digital projects. Higher roles need stronger coding.","pattern":["Aptitude","logical reasoning","pseudocode","coding for specialist tracks","interview"],"preparation":["Practice pseudocode output questions","Revise OOPs and DBMS","Solve easy and medium coding problems","Prepare project and internship explanations"],"pdf":"assets/pdfs/infosys-previous-year-pattern.pdf"},
            {"name":"Wipro","roles":"Project Engineer, WILP roles","employees":"Approx 240,000+ employees globally","rounds":"Usually 4 rounds: aptitude, written communication, technical interview, HR interview","skills":["Aptitude","Logical reasoning","Programming basics","Written communication","HR confidence"],"about":"Wipro looks for freshers who can learn quickly, communicate clearly, and work on IT services, support, testing, and development projects.","pattern":["Aptitude","essay or written communication","coding basics","technical interview","HR interview"],"preparation":["Improve English writing","Revise programming basics","Practice logical reasoning","Prepare HR answers clearly"],"pdf":"assets/pdfs/wipro-previous-year-pattern.pdf"},
            {"name":"Accenture","roles":"Application Development Associate","employees":"Approx 775,000+ employees globally","rounds":"Usually 4 to 5 rounds: cognitive test, technical test, coding, communication, interview","skills":["Coding fundamentals","Cloud basics","Verbal ability","Problem solving","Team skills"],"about":"Accenture hires for technology, consulting, operations, cloud, data, and application development roles. It values communication, adaptability, and digital skills.","pattern":["Cognitive assessment","technical assessment","coding","communication round","interview"],"preparation":["Practice aptitude speed","Learn basic cloud and SDLC terms","Prepare coding fundamentals","Practice speaking clearly in English"],"pdf":"assets/pdfs/accenture-previous-year-pattern.pdf"},
            {"name":"Cognizant","roles":"Programmer Analyst Trainee","employees":"Approx 340,000+ employees globally","rounds":"Usually 3 to 4 rounds: aptitude, technical MCQ, coding, interview","skills":["Java or Python","SQL","Web basics","Communication","Interview preparation"],"about":"Cognizant hires freshers for software development, support, testing, cloud, data, and business technology roles. Project readiness is important.","pattern":["Aptitude","technical MCQ","coding","interview"],"preparation":["Revise Java or Python basics","Practice SQL queries","Learn HTML/CSS/JS basics","Explain projects confidently"],"pdf":"assets/pdfs/cognizant-previous-year-pattern.pdf"},
            {"name":"Capgemini","roles":"Analyst, Software Engineer","employees":"Approx 340,000+ employees globally","rounds":"Usually 4 rounds: aptitude/game-based test, pseudocode, communication, interview","skills":["Pseudocode","Aptitude","CS basics","Communication","Problem solving"],"about":"Capgemini fresher hiring checks technical foundation, pseudocode thinking, communication, and fit for consulting and engineering projects.","pattern":["Technical MCQ","pseudocode","game-based aptitude","communication","interview"],"preparation":["Practice pseudocode","Take aptitude mocks","Revise CS basics","Prepare for communication round"],"pdf":"assets/pdfs/capgemini-previous-year-pattern.pdf"}
        ]
    },
    nonIt: {
        eyebrow: 'Non-IT preparation',
        heading: 'Non-IT Companies and Roles',
        description: 'Click any company to see job roles, rounds, employee strength, desired skills, and preparation tips.',
        companies: [
            {"name":"Deloitte","roles":"Analyst, Business Operations","employees":"Approx 450,000+ employees globally","rounds":"Usually 3 to 4 rounds: aptitude/case, group discussion or case, technical/domain, HR","skills":["Excel","Communication","Business analysis","Problem solving","Presentation"],"about":"Deloitte analyst roles need business thinking, client communication, documentation, Excel, and structured problem solving.","pattern":["Aptitude","case discussion","communication","interview"],"preparation":["Practice Excel","Prepare business case examples","Improve presentation skills","Read about consulting basics"],"pdf":"assets/pdfs/deloitte-previous-year-pattern.pdf"},
            {"name":"EY","roles":"Associate, Finance Analyst","employees":"Approx 390,000+ employees globally","rounds":"Usually 3 rounds: aptitude/domain screening, technical/domain interview, HR","skills":["Accounting basics","Excel","Presentation","Analytical thinking","Business communication"],"about":"EY roles often require finance awareness, analytical thinking, Excel, documentation, and client communication.","pattern":["Aptitude","domain basics","interview"],"preparation":["Revise accounting basics","Practice Excel","Read business news","Prepare finance project examples"],"pdf":"assets/pdfs/ey-previous-year-pattern.pdf"},
            {"name":"Amazon","roles":"Operations Associate, Catalog Associate","employees":"Approx 1,500,000+ employees globally","rounds":"Usually 3 to 4 rounds: assessment, work style test, operations interview, HR","skills":["Excel","Process thinking","English communication","Ownership","Customer focus"],"about":"Amazon operations roles focus on process accuracy, ownership, communication, data handling, and customer obsession.","pattern":["Aptitude","work style assessment","operations interview"],"preparation":["Prepare examples using STAR format","Practice Excel","Understand operations basics","Improve written communication"],"pdf":"assets/pdfs/amazon-previous-year-pattern.pdf"},
            {"name":"HDFC Bank","roles":"Relationship Manager, Sales Officer","employees":"Approx 200,000+ employees","rounds":"Usually 3 rounds: aptitude/basic screening, sales/domain interview, HR","skills":["Banking basics","Sales skills","Customer handling","Targets","Communication"],"about":"HDFC Bank roles need customer handling, sales confidence, financial product awareness, and target ownership.","pattern":["Aptitude","sales fitment","HR interview"],"preparation":["Learn banking products","Practice sales pitch","Improve communication","Prepare customer-handling examples"],"pdf":"assets/pdfs/hdfc-bank-previous-year-pattern.pdf"},
            {"name":"Byjus","roles":"Business Development Associate","employees":"Employee count varies by business unit and year","rounds":"Usually 3 rounds: communication screening, sales pitch, HR/manager interview","skills":["Sales pitch","Counselling","Communication","Confidence","Follow-up skills"],"about":"Business development roles need persuasive speaking, student counselling, target ownership, and disciplined follow-up.","pattern":["Communication round","sales pitch","HR interview"],"preparation":["Practice sales pitch","Build confidence","Prepare counselling examples","Improve objection handling"],"pdf":"assets/pdfs/byjus-previous-year-pattern.pdf"},
            {"name":"Genpact","roles":"Process Associate, Finance Operations","employees":"Approx 125,000+ employees globally","rounds":"Usually 3 rounds: aptitude, communication/domain, HR","skills":["Process knowledge","Excel","Email writing","Attention to detail","Teamwork"],"about":"Genpact process roles focus on accuracy, process understanding, email writing, Excel, and teamwork.","pattern":["Aptitude","communication","operations interview"],"preparation":["Practice email writing","Learn Excel basics","Prepare process examples","Improve attention to detail"],"pdf":"assets/pdfs/genpact-previous-year-pattern.pdf"}
        ]
    },
    government: {
        eyebrow: 'Government preparation',
        heading: 'Government Jobs and Exam Paths',
        description: 'Click any exam path to see stages, roles, hiring scale, skills, and preparation tips.',
        companies: [
            {"name":"SSC","roles":"CGL, CHSL, MTS","employees":"Posts vary every notification; central government recruitment body","rounds":"Usually 2 to 3 stages depending on exam: Tier 1, Tier 2, skill/document verification","skills":["Quantitative aptitude","Reasoning","English","General awareness","Current affairs"],"about":"SSC exams require speed in quant, reasoning, English, and general awareness with repeated mock test analysis.","pattern":["Tier 1 objective exam","Tier 2 exam","skill or document verification depending on post"],"preparation":["Solve previous papers","Revise current affairs","Take timed mocks","Analyze wrong answers"],"pdf":"assets/pdfs/ssc-previous-year-pattern.pdf"},
            {"name":"Banking","roles":"IBPS PO, SBI PO, Clerk","employees":"Vacancies vary by bank notification","rounds":"Usually 2 to 3 stages: prelims, mains, interview for PO roles","skills":["Speed maths","Reasoning puzzles","English","Banking awareness","Computer awareness"],"about":"Banking exams need speed, accuracy, puzzle solving, English comprehension, and banking awareness.","pattern":["Prelims","mains","interview for PO roles"],"preparation":["Practice puzzles daily","Improve calculation speed","Read banking news","Take sectional mocks"],"pdf":"assets/pdfs/banking-previous-year-pattern.pdf"},
            {"name":"Railways","roles":"RRB NTPC, Group D, JE","employees":"Vacancies vary by railway recruitment board notification","rounds":"Usually 2 to 3 stages: CBT 1, CBT 2/skill test, document verification","skills":["Maths","Reasoning","General science","Current affairs","Static GK"],"about":"Railway exams focus on maths, reasoning, general science, and current affairs with exam-specific syllabus practice.","pattern":["CBT 1","CBT 2 or skill test depending on role","document verification"],"preparation":["Revise science basics","Take CBT mocks","Practice static GK","Study previous papers"],"pdf":"assets/pdfs/railways-previous-year-pattern.pdf"},
            {"name":"UPSC","roles":"Civil Services, EPFO, CAPF","employees":"Vacancies vary every year by notification","rounds":"Usually 3 stages: prelims, mains, interview","skills":["Polity","History","Economy","Answer writing","Current affairs"],"about":"UPSC preparation needs concept clarity, newspaper reading, answer writing, revision, and mock practice.","pattern":["Prelims","mains","interview"],"preparation":["Read NCERT basics","Prepare short notes","Practice answer writing","Revise current affairs"],"pdf":"assets/pdfs/upsc-previous-year-pattern.pdf"},
            {"name":"State PSC","roles":"Group 1, Group 2, State services","employees":"Vacancies vary by state notification","rounds":"Usually 3 stages: prelims, mains, interview","skills":["State GK","Aptitude","Current affairs","Essay writing","General studies"],"about":"State PSC exams combine state-specific GK, general studies, aptitude, current affairs, and written expression.","pattern":["Prelims","mains","interview"],"preparation":["Read state GK","Follow current affairs","Practice essays","Solve state previous papers"],"pdf":"assets/pdfs/state-psc-previous-year-pattern.pdf"},
            {"name":"Defence","roles":"NDA, CDS, AFCAT","employees":"Vacancies vary by defence notification","rounds":"Usually 3 stages: written exam, SSB/interview, medical test","skills":["Maths","English","GK","Physical fitness","Confidence"],"about":"Defence exams need written exam preparation plus communication, confidence, leadership examples, and physical fitness readiness.","pattern":["Written exam","SSB or interview process","medical test"],"preparation":["Practice maths and English","Build fitness","Prepare officer-like qualities examples","Read defence current affairs"],"pdf":"assets/pdfs/defence-previous-year-pattern.pdf"}
        ]
    }
};

const companyEyebrow = document.getElementById('company-eyebrow');
const companyHeading = document.getElementById('company-heading');
const companyDescription = document.getElementById('company-description');
const companyList = document.getElementById('company-list');
const jobTabs = document.querySelectorAll('.job-tab');
let activeCategory = 'it';

function renderCompanies(category) {
    const data = careerData[category];
    activeCategory = category;
    companyEyebrow.textContent = data.eyebrow;
    companyHeading.textContent = data.heading;
    companyDescription.textContent = data.description;
    companyList.innerHTML = data.companies.map(function(company) {
        return '<article class="company-card"><button class="company-select" type="button" data-company="' + company.name + '"><h3>' + company.name + '</h3><p>' + company.roles + '</p><ul>' + company.skills.slice(0, 4).map(function(skill) { return '<li>' + skill + '</li>'; }).join('') + '</ul><span>View details</span></button></article>';
    }).join('') + '<section class="company-detail" id="company-detail"><p>Select any card to view rounds, employees, roles, wanted skills, and preparation content.</p></section>';
}

function listItems(items) {
    return items.map(function(item) { return '<li>' + item + '</li>'; }).join('');
}

function renderCompanyDetail(companyName) {
    const companies = careerData[activeCategory].companies;
    const company = companies.find(function(item) { return item.name === companyName; });
    const detail = document.getElementById('company-detail');
    if (!company || !detail) return;

    const pdfLink = company.pdf ? '<div class="pdf-actions"><a class="pdf-link" href="' + company.pdf + '" target="_blank">Open PDF</a><a class="pdf-link secondary-pdf" href="' + company.pdf + '" download>Download PDF</a></div>' : '<p class="pdf-note">PDF resource is coming soon for this company.</p>';

    detail.innerHTML = '<div class="detail-header"><div><p>Company details</p><h3>' + company.name + '</h3></div>' + pdfLink + '</div>' +
        '<p class="detail-about">' + company.about + '</p>' +
        '<div class="detail-stats"><div><strong>Rounds</strong><span>' + company.rounds + '</span></div><div><strong>Total employees</strong><span>' + company.employees + '</span></div><div><strong>Main roles</strong><span>' + company.roles + '</span></div></div>' +
        '<div class="detail-grid"><div><h4>Skills Company Wants</h4><ul>' + listItems(company.skills) + '</ul></div>' +
        '<div><h4>Selection Pattern</h4><ul>' + listItems(company.pattern) + '</ul></div>' +
        '<div><h4>How to Prepare</h4><ul>' + listItems(company.preparation) + '</ul></div></div>';
}

companyList.addEventListener('click', function(event) {
    const button = event.target.closest('.company-select');
    if (!button) return;
    document.querySelectorAll('.company-select').forEach(function(item) { item.classList.remove('selected'); });
    button.classList.add('selected');
    renderCompanyDetail(button.dataset.company);
});

jobTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        jobTabs.forEach(function(item) { item.classList.remove('active'); });
        tab.classList.add('active');
        renderCompanies(tab.dataset.category);
    });
});

renderCompanies('it');

const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chat-close');
const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

function addMessage(text, type) {
    const message = document.createElement('div');
    message.className = 'message ' + type + '-message';
    message.textContent = text;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(question) {
    const text = question.toLowerCase();

    if (text.includes('tcs')) {
        return 'For TCS, focus on aptitude, verbal ability, programming logic, one coding question, OOPs, DBMS, SQL, and a clear project explanation. Click the TCS card to download the practice PDF.';
    }

    if (text.includes('coding') || text.includes('program')) {
        return 'For coding, start with arrays, strings, loops, functions, sorting, searching, recursion basics, SQL, and 2 small projects. Practice 2 problems daily and revise mistakes.';
    }

    if (text.includes('aptitude') || text.includes('math')) {
        return 'For aptitude, focus on percentages, profit and loss, time and work, speed distance, averages, ratios, number systems, and data interpretation. Speed improves with timed practice.';
    }

    if (text.includes('interview') || text.includes('hr')) {
        return 'For interviews, prepare your introduction, project explanation, strengths, weakness, why this company, basic technical concepts, and 5 real examples from your work or college.';
    }

    if (text.includes('government') || text.includes('ssc') || text.includes('bank')) {
        return 'For government exams, divide time between quant, reasoning, English, general awareness, current affairs, and previous papers. Take one mock test every week and analyze it.';
    }

    if (text.includes('non it') || text.includes('sales') || text.includes('finance') || text.includes('hr')) {
        return 'For non-IT roles, build Excel, communication, business basics, email writing, presentation skills, and role-specific knowledge like finance, sales, HR, or operations.';
    }

    if (text.includes('it') || text.includes('company') || text.includes('companies')) {
        return 'For IT companies, prepare aptitude, coding basics, OOPs, DBMS, SQL, computer networks basics, resume projects, and communication. Start with TCS, Infosys, Wipro, Accenture, Cognizant, and Capgemini patterns.';
    }

    return 'Good doubt. Tell me your target path: IT, Non-IT, Government Jobs, Coding, Aptitude, or Interview. I will suggest what to study first and how to prepare.';
}

chatToggle.addEventListener('click', function() {
    chatWindow.classList.toggle('open');
});

chatClose.addEventListener('click', function() {
    chatWindow.classList.remove('open');
});

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const question = chatInput.value.trim();
    if (!question) return;
    addMessage(question, 'user');
    chatInput.value = '';
    addMessage(getBotReply(question), 'bot');
});

