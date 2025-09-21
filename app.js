// Student Career Advisor Application
class CareerAdvisorApp {
    constructor() {
        this.currentUser = null;
        this.currentQuestionIndex = 0;
        this.userResponses = {};
        this.isAuthenticated = false;
        this.currentSection = 'home';
        
        // Sample users for demo
        this.users = [
            {
                id: 1,
                name: 'Demo Student',
                email: 'student@demo.com',
                password: 'password123',
                stream: 'science',
                grade: '12',
                interests: 'Technology and innovation',
                isAdmin: false
            },
            {
                id: 2,
                name: 'Admin User',
                email: 'admin@demo.com',
                password: 'admin123',
                stream: '',
                grade: '',
                interests: '',
                isAdmin: true
            }
        ];
        
        // Career data
        this.careerData = {
            "Technology & IT": [
                {
                    title: "Software Developer",
                    description: "Design and develop software applications, websites, and systems",
                    keySubjects: ["Computer Science", "Mathematics", "Programming Languages", "Data Structures"],
                    jobRoles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile App Developer"],
                    averageSalary: "₹3-20 LPA",
                    challenges: "Rapid technology changes, continuous learning required, tight deadlines, debugging complex issues",
                    studyResources: "Programming tutorials, coding bootcamps, online courses, practice projects",
                    youtubeChannels: ["CS Dojo", "Programming with Mosh", "Traversy Media", "The Net Ninja"],
                    category: "Technology & IT",
                    icon: "💻"
                },
                {
                    title: "Data Scientist",
                    description: "Analyze complex data to help organizations make informed decisions",
                    keySubjects: ["Statistics", "Mathematics", "Computer Science", "Machine Learning"],
                    jobRoles: ["Data Analyst", "ML Engineer", "Business Intelligence Analyst", "Research Scientist"],
                    averageSalary: "₹6-25 LPA",
                    challenges: "Data quality issues, complex statistical concepts, business understanding required",
                    studyResources: "Python/R programming, statistics courses, machine learning tutorials",
                    youtubeChannels: ["StatQuest", "3Blue1Brown", "Krish Naik", "CodeBasics"],
                    category: "Technology & IT",
                    icon: "📊"
                },
                {
                    title: "Cybersecurity Expert",
                    description: "Protect organizations from digital threats and security breaches",
                    keySubjects: ["Computer Networks", "Information Security", "Ethical Hacking", "Cryptography"],
                    jobRoles: ["Security Analyst", "Penetration Tester", "Security Consultant", "CISO"],
                    averageSalary: "₹10-30 LPA",
                    challenges: "Constantly evolving threats, high stress environment, 24/7 monitoring needs",
                    studyResources: "Ethical hacking courses, security certifications, hands-on labs",
                    youtubeChannels: ["LiveOverflow", "John Hammond", "NetworkChuck", "Cybrary"],
                    category: "Technology & IT",
                    icon: "🔒"
                }
            ],
            "Healthcare & Medicine": [
                {
                    title: "Doctor",
                    description: "Diagnose and treat patients, promote health and prevent disease",
                    keySubjects: ["Biology", "Chemistry", "Physics", "Mathematics"],
                    jobRoles: ["General Practitioner", "Specialist", "Surgeon", "Researcher"],
                    averageSalary: "₹8-50+ LPA",
                    challenges: "Long study duration, high pressure, emotional stress, continuous education",
                    studyResources: "Medical textbooks, NEET preparation, clinical training, medical journals",
                    youtubeChannels: ["Osmosis", "Armando Hasudungan", "Dr. Najeeb Lectures", "Khan Academy Medicine"],
                    category: "Healthcare & Medicine",
                    icon: "⚕️"
                },
                {
                    title: "Mental Health Counselor",
                    description: "Provide therapy and support for mental health issues",
                    keySubjects: ["Psychology", "Counseling", "Social Work", "Human Development"],
                    jobRoles: ["Therapist", "Clinical Psychologist", "Counseling Psychologist", "Social Worker"],
                    averageSalary: "₹3-15 LPA",
                    challenges: "Emotional burden, difficult cases, stigma, building client trust",
                    studyResources: "Psychology courses, therapy training, certification programs",
                    youtubeChannels: ["Psychology in Action", "Therapy in a Nutshell", "Dr. Ramani", "Mental Health America"],
                    category: "Healthcare & Medicine",
                    icon: "🧠"
                }
            ],
            "Engineering": [
                {
                    title: "Civil Engineer",
                    description: "Design and oversee construction of infrastructure projects",
                    keySubjects: ["Mathematics", "Physics", "Engineering Drawing", "Materials Science"],
                    jobRoles: ["Structural Engineer", "Transportation Engineer", "Environmental Engineer", "Project Manager"],
                    averageSalary: "₹3-15 LPA",
                    challenges: "Project delays, budget constraints, safety regulations, environmental concerns",
                    studyResources: "Engineering textbooks, CAD software tutorials, field experience",
                    youtubeChannels: ["The Constructor", "Civil Engineering Academy", "Practical Engineering", "EngineerGuy"],
                    category: "Engineering",
                    icon: "🏗️"
                }
            ],
            "Business & Finance": [
                {
                    title: "Digital Marketing Specialist",
                    description: "Promote businesses and products through digital channels",
                    keySubjects: ["Marketing", "Business Studies", "Communication", "Data Analytics"],
                    jobRoles: ["SEO Specialist", "Social Media Manager", "Content Marketer", "PPC Specialist"],
                    averageSalary: "₹3-20 LPA",
                    challenges: "Changing algorithms, measuring ROI, keeping up with trends, client expectations",
                    studyResources: "Digital marketing courses, Google certifications, social media training",
                    youtubeChannels: ["Neil Patel", "Moz", "HubSpot", "Marketing 360"],
                    category: "Business & Finance",
                    icon: "📈"
                }
            ]
        };
        
        // Questionnaire questions
        this.questions = [
            {
                id: 1,
                question: "Which subjects do you enjoy studying the most?",
                type: "checkbox",
                options: ["Mathematics", "Science", "English", "History", "Computer Science", "Arts", "Business Studies", "Psychology"]
            },
            {
                id: 2,
                question: "What type of work environment do you prefer?",
                type: "radio",
                options: ["Office-based", "Remote work", "Outdoor/Field work", "Laboratory", "Hospital/Clinic", "Creative studio"]
            },
            {
                id: 3,
                question: "How do you prefer to work?",
                type: "radio",
                options: ["Independently", "In small teams", "In large teams", "Leading others", "Following instructions"]
            },
            {
                id: 4,
                question: "What are your strongest skills?",
                type: "checkbox",
                options: ["Problem solving", "Communication", "Leadership", "Creativity", "Technical skills", "Analytical thinking", "Teamwork", "Organization"]
            },
            {
                id: 5,
                question: "What motivates you most in work?",
                type: "radio",
                options: ["High salary", "Helping others", "Creative expression", "Innovation", "Job security", "Work-life balance", "Recognition"]
            },
            {
                id: 6,
                question: "How comfortable are you with technology?",
                type: "radio",
                options: ["Very comfortable", "Somewhat comfortable", "Neutral", "Not very comfortable", "Prefer to avoid"]
            },
            {
                id: 7,
                question: "What are your career aspirations?",
                type: "text",
                placeholder: "Describe your long-term career goals..."
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.checkAuthentication();
        this.loadCareers();
        this.updateAdminStats();
        
        // Make functions globally available
        window.showSection = (section) => this.showSection(section);
        window.logout = () => this.logout();
        window.startQuestionnaire = () => this.startQuestionnaire();
        window.nextQuestion = () => this.nextQuestion();
        window.previousQuestion = () => this.previousQuestion();
        window.filterCareers = (category) => this.filterCareers(category);
        window.showCareerDetails = (title) => this.showCareerDetails(title);
        window.exportData = () => this.exportData();
        window.viewUserResponses = () => this.viewUserResponses();
        window.generateReport = () => this.generateReport();
    }
    
    setupEventListeners() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }
        
        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }
    }
    
    checkAuthentication() {
        const userData = sessionStorage.getItem('currentUser');
        if (userData) {
            this.currentUser = JSON.parse(userData);
            this.isAuthenticated = true;
            this.updateNavigation();
        }
    }
    
    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            this.isAuthenticated = true;
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            this.updateNavigation();
            this.showSection('dashboard');
            this.showAlert('Login successful!', 'success');
        } else {
            this.showAlert('Invalid email or password!', 'error');
        }
    }
    
    handleRegister(e) {
        e.preventDefault();
        
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        const stream = document.getElementById('regStream').value;
        const grade = document.getElementById('regGrade').value;
        const interests = document.getElementById('regInterests').value;
        
        // Validation
        if (password !== confirmPassword) {
            this.showAlert('Passwords do not match!', 'error');
            return;
        }
        
        if (this.users.find(u => u.email === email)) {
            this.showAlert('Email already exists!', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: this.users.length + 1,
            name,
            email,
            password,
            stream,
            grade,
            interests,
            isAdmin: false
        };
        
        this.users.push(newUser);
        this.currentUser = newUser;
        this.isAuthenticated = true;
        sessionStorage.setItem('currentUser', JSON.stringify(newUser));
        
        this.updateNavigation();
        this.showSection('dashboard');
        this.showAlert('Registration successful!', 'success');
    }
    
    logout() {
        this.currentUser = null;
        this.isAuthenticated = false;
        this.userResponses = {};
        sessionStorage.removeItem('currentUser');
        this.updateNavigation();
        this.showSection('home');
        this.showAlert('Logged out successfully!', 'success');
    }
    
    updateNavigation() {
        const navLogin = document.getElementById('nav-login');
        const navRegister = document.getElementById('nav-register');
        const navDashboard = document.getElementById('nav-dashboard');
        const navCareers = document.getElementById('nav-careers');
        const navResources = document.getElementById('nav-resources');
        const navAdmin = document.getElementById('nav-admin');
        const navLogout = document.getElementById('nav-logout');
        const userName = document.getElementById('userName');
        
        if (this.isAuthenticated) {
            navLogin.classList.add('d-none');
            navRegister.classList.add('d-none');
            navDashboard.classList.remove('d-none');
            navCareers.classList.remove('d-none');
            navResources.classList.remove('d-none');
            navLogout.classList.remove('d-none');
            
            if (this.currentUser.isAdmin) {
                navAdmin.classList.remove('d-none');
            }
            
            if (userName) {
                userName.textContent = this.currentUser.name;
            }
        } else {
            navLogin.classList.remove('d-none');
            navRegister.classList.remove('d-none');
            navDashboard.classList.add('d-none');
            navCareers.classList.add('d-none');
            navResources.classList.add('d-none');
            navAdmin.classList.add('d-none');
            navLogout.classList.add('d-none');
        }
    }
    
    showSection(sectionName) {
        console.log('Showing section:', sectionName); // Debug log
        
        // Hide all sections
        const sections = document.querySelectorAll('.section-content');
        sections.forEach(section => {
            section.classList.add('d-none');
            section.classList.remove('fade-in');
        });
        
        // Show requested section
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.remove('d-none');
            targetSection.classList.add('fade-in');
            this.currentSection = sectionName;
            
            // Load section-specific data
            if (sectionName === 'dashboard') {
                this.loadDashboard();
            } else if (sectionName === 'careers') {
                this.loadCareers();
            } else if (sectionName === 'admin') {
                this.updateAdminStats();
            }
        } else {
            console.error('Section not found:', `${sectionName}-section`);
        }
    }
    
    loadDashboard() {
        // Load recommendations if user has taken assessment
        const recommendations = sessionStorage.getItem(`recommendations_${this.currentUser.id}`);
        if (recommendations) {
            const recData = JSON.parse(recommendations);
            this.displayRecommendations(recData, 'recommendationCards');
            document.getElementById('recommendationsRow').style.display = 'block';
        }
    }
    
    startQuestionnaire() {
        this.currentQuestionIndex = 0;
        this.userResponses = {};
        this.showSection('questionnaire');
        this.loadQuestion();
    }
    
    loadQuestion() {
        const questionContainer = document.getElementById('questionContainer');
        const question = this.questions[this.currentQuestionIndex];
        const questionNumber = document.getElementById('questionNumber');
        const totalQuestions = document.getElementById('totalQuestions');
        const progressBar = document.getElementById('progressBar');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        // Update progress
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        questionNumber.textContent = this.currentQuestionIndex + 1;
        totalQuestions.textContent = this.questions.length;
        
        // Update button states
        prevBtn.disabled = this.currentQuestionIndex === 0;
        nextBtn.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Get Results' : 'Next';
        
        // Generate question HTML
        let questionHTML = `<div class="question-container slide-in-right">
            <h4 class="question-title">${question.question}</h4>`;
        
        if (question.type === 'radio') {
            questionHTML += '<div class="row">';
            question.options.forEach((option, index) => {
                const isChecked = this.userResponses[question.id] === option ? 'checked' : '';
                questionHTML += `
                    <div class="col-md-6 mb-2">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="question_${question.id}" 
                                   id="option_${question.id}_${index}" value="${option}" ${isChecked}>
                            <label class="form-check-label" for="option_${question.id}_${index}">
                                ${option}
                            </label>
                        </div>
                    </div>`;
            });
            questionHTML += '</div>';
        } else if (question.type === 'checkbox') {
            questionHTML += '<div class="row">';
            const savedResponses = this.userResponses[question.id] || [];
            question.options.forEach((option, index) => {
                const isChecked = savedResponses.includes(option) ? 'checked' : '';
                questionHTML += `
                    <div class="col-md-6 mb-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="question_${question.id}" 
                                   id="option_${question.id}_${index}" value="${option}" ${isChecked}>
                            <label class="form-check-label" for="option_${question.id}_${index}">
                                ${option}
                            </label>
                        </div>
                    </div>`;
            });
            questionHTML += '</div>';
        } else if (question.type === 'text') {
            const savedResponse = this.userResponses[question.id] || '';
            questionHTML += `
                <textarea class="form-control questionnaire-text" name="question_${question.id}" 
                          placeholder="${question.placeholder}" rows="5">${savedResponse}</textarea>`;
        }
        
        questionHTML += '</div>';
        questionContainer.innerHTML = questionHTML;
    }
    
    saveCurrentResponse() {
        const question = this.questions[this.currentQuestionIndex];
        
        if (question.type === 'radio') {
            const selectedOption = document.querySelector(`input[name="question_${question.id}"]:checked`);
            if (selectedOption) {
                this.userResponses[question.id] = selectedOption.value;
            }
        } else if (question.type === 'checkbox') {
            const selectedOptions = document.querySelectorAll(`input[name="question_${question.id}"]:checked`);
            this.userResponses[question.id] = Array.from(selectedOptions).map(option => option.value);
        } else if (question.type === 'text') {
            const textResponse = document.querySelector(`textarea[name="question_${question.id}"]`);
            if (textResponse) {
                this.userResponses[question.id] = textResponse.value;
            }
        }
    }
    
    nextQuestion() {
        this.saveCurrentResponse();
        
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
        } else {
            this.processResults();
        }
    }
    
    previousQuestion() {
        this.saveCurrentResponse();
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }
    
    processResults() {
        // Career matching algorithm
        const scores = {};
        
        // Initialize scores
        Object.keys(this.careerData).forEach(category => {
            this.careerData[category].forEach(career => {
                scores[career.title] = 0;
            });
        });
        
        // Calculate scores based on responses
        const responses = this.userResponses;
        
        // Subject preferences
        if (responses[1]) {
            const subjects = Array.isArray(responses[1]) ? responses[1] : [responses[1]];
            subjects.forEach(subject => {
                if (subject.includes('Computer') || subject.includes('Mathematics')) {
                    scores['Software Developer'] += 20;
                    scores['Data Scientist'] += 15;
                    scores['Cybersecurity Expert'] += 10;
                }
                if (subject.includes('Science') || subject.includes('Biology')) {
                    scores['Doctor'] += 25;
                    scores['Data Scientist'] += 10;
                }
                if (subject.includes('Psychology')) {
                    scores['Mental Health Counselor'] += 25;
                }
                if (subject.includes('Business')) {
                    scores['Digital Marketing Specialist'] += 20;
                }
                if (subject.includes('Mathematics') || subject.includes('Physics')) {
                    scores['Civil Engineer'] += 20;
                }
            });
        }
        
        // Work environment preferences
        if (responses[2]) {
            if (responses[2].includes('Remote') || responses[2].includes('Office')) {
                scores['Software Developer'] += 15;
                scores['Digital Marketing Specialist'] += 15;
                scores['Data Scientist'] += 10;
            }
            if (responses[2].includes('Hospital') || responses[2].includes('Laboratory')) {
                scores['Doctor'] += 20;
                scores['Mental Health Counselor'] += 15;
            }
            if (responses[2].includes('Field') || responses[2].includes('Outdoor')) {
                scores['Civil Engineer'] += 20;
            }
        }
        
        // Skills assessment
        if (responses[4]) {
            const skills = Array.isArray(responses[4]) ? responses[4] : [responses[4]];
            skills.forEach(skill => {
                if (skill.includes('Technical') || skill.includes('Problem solving')) {
                    scores['Software Developer'] += 15;
                    scores['Data Scientist'] += 15;
                    scores['Cybersecurity Expert'] += 15;
                }
                if (skill.includes('Communication') || skill.includes('Teamwork')) {
                    scores['Mental Health Counselor'] += 20;
                    scores['Digital Marketing Specialist'] += 15;
                    scores['Doctor'] += 10;
                }
                if (skill.includes('Analytical')) {
                    scores['Data Scientist'] += 20;
                    scores['Cybersecurity Expert'] += 10;
                }
                if (skill.includes('Leadership')) {
                    scores['Civil Engineer'] += 15;
                    scores['Digital Marketing Specialist'] += 10;
                }
                if (skill.includes('Creativity')) {
                    scores['Digital Marketing Specialist'] += 15;
                }
            });
        }
        
        // Technology comfort level
        if (responses[6]) {
            if (responses[6].includes('Very comfortable') || responses[6].includes('Somewhat comfortable')) {
                scores['Software Developer'] += 25;
                scores['Data Scientist'] += 20;
                scores['Cybersecurity Expert'] += 25;
                scores['Digital Marketing Specialist'] += 15;
            }
        }
        
        // Motivation factors
        if (responses[5]) {
            if (responses[5].includes('Helping others')) {
                scores['Doctor'] += 25;
                scores['Mental Health Counselor'] += 25;
            }
            if (responses[5].includes('High salary')) {
                scores['Software Developer'] += 10;
                scores['Data Scientist'] += 15;
                scores['Cybersecurity Expert'] += 15;
            }
            if (responses[5].includes('Innovation')) {
                scores['Software Developer'] += 15;
                scores['Data Scientist'] += 15;
                scores['Cybersecurity Expert'] += 10;
            }
        }
        
        // Convert scores to recommendations
        const recommendations = [];
        Object.entries(scores).forEach(([careerTitle, score]) => {
            if (score > 0) {
                // Find career details
                let careerDetails = null;
                Object.values(this.careerData).forEach(categoryData => {
                    const found = categoryData.find(career => career.title === careerTitle);
                    if (found) careerDetails = found;
                });
                
                if (careerDetails) {
                    recommendations.push({
                        ...careerDetails,
                        score: Math.min(score, 100)
                    });
                }
            }
        });
        
        // Sort by score and take top 5
        recommendations.sort((a, b) => b.score - a.score);
        const topRecommendations = recommendations.slice(0, 5);
        
        // Save recommendations
        sessionStorage.setItem(`recommendations_${this.currentUser.id}`, JSON.stringify(topRecommendations));
        sessionStorage.setItem(`responses_${this.currentUser.id}`, JSON.stringify(this.userResponses));
        
        // Show results
        this.displayResults(topRecommendations);
        this.showSection('results');
    }
    
    displayResults(recommendations) {
        const resultsContainer = document.getElementById('resultsContainer');
        
        if (recommendations.length === 0) {
            resultsContainer.innerHTML = `
                <div class="col-12 text-center">
                    <div class="alert alert-warning">
                        <h5>No specific recommendations found</h5>
                        <p>Please explore all career options to find what interests you most.</p>
                    </div>
                </div>`;
            return;
        }
        
        let resultsHTML = '';
        recommendations.forEach((career, index) => {
            resultsHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="recommendation-card slide-in-right" style="animation-delay: ${index * 0.1}s">
                        <div class="match-score">${career.score}% Match</div>
                        <div class="career-card-header">
                            <div class="career-icon">${career.icon}</div>
                            <div>
                                <h5 class="career-title">${career.title}</h5>
                                <p class="career-category">${career.category}</p>
                            </div>
                        </div>
                        <p class="career-description">${career.description}</p>
                        <span class="career-salary">${career.averageSalary}</span>
                        <div class="career-tags mt-3">
                            ${career.jobRoles.slice(0, 3).map(role => 
                                `<span class="career-tag">${role}</span>`
                            ).join('')}
                        </div>
                        <div class="mt-3">
                            <button class="btn btn--primary btn--sm" onclick="showCareerDetails('${career.title}')">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>`;
        });
        
        resultsContainer.innerHTML = resultsHTML;
    }
    
    displayRecommendations(recommendations, containerId) {
        const container = document.getElementById(containerId);
        if (!container || recommendations.length === 0) return;
        
        let html = '';
        recommendations.slice(0, 3).forEach(career => {
            html += `
                <div class="col-md-4 mb-3">
                    <div class="card card-equal-height">
                        <div class="card__body">
                            <div class="d-flex align-items-center mb-2">
                                <span class="me-2" style="font-size: 1.5rem;">${career.icon}</span>
                                <h6 class="m-0">${career.title}</h6>
                            </div>
                            <p class="text-muted small mb-2">${career.description}</p>
                            <span class="status status--success">${career.score}% Match</span>
                            <div class="mt-auto">
                                <button class="btn btn--sm btn--outline w-100 mt-2" onclick="showCareerDetails('${career.title}')">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
        
        container.innerHTML = html;
    }
    
    loadCareers() {
        this.displayCareers('all');
    }
    
    displayCareers(filterCategory) {
        const careersContainer = document.getElementById('careersContainer');
        let allCareers = [];
        
        // Collect all careers
        Object.entries(this.careerData).forEach(([category, careers]) => {
            careers.forEach(career => {
                if (filterCategory === 'all' || career.category === filterCategory) {
                    allCareers.push(career);
                }
            });
        });
        
        let careersHTML = '';
        allCareers.forEach((career, index) => {
            careersHTML += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="career-card fade-in" style="animation-delay: ${index * 0.1}s" onclick="showCareerDetails('${career.title}')">
                        <div class="career-card-header">
                            <div class="career-icon">${career.icon}</div>
                            <div>
                                <h5 class="career-title">${career.title}</h5>
                                <p class="career-category">${career.category}</p>
                            </div>
                        </div>
                        <p class="career-description">${career.description}</p>
                        <span class="career-salary">${career.averageSalary}</span>
                        <div class="career-tags">
                            ${career.jobRoles.slice(0, 3).map(role => 
                                `<span class="career-tag">${role}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>`;
        });
        
        careersContainer.innerHTML = careersHTML;
    }
    
    showCareerDetails(careerTitle) {
        let careerDetails = null;
        Object.values(this.careerData).forEach(categoryData => {
            const found = categoryData.find(career => career.title === careerTitle);
            if (found) careerDetails = found;
        });
        
        if (!careerDetails) return;
        
        const modal = document.getElementById('careerModal');
        const modalTitle = document.getElementById('careerModalTitle');
        const modalBody = document.getElementById('careerModalBody');
        
        modalTitle.textContent = careerDetails.title;
        
        modalBody.innerHTML = `
            <div class="mb-4">
                <div class="d-flex align-items-center mb-3">
                    <span class="career-icon me-3">${careerDetails.icon}</span>
                    <div>
                        <h6 class="m-0">${careerDetails.category}</h6>
                        <span class="career-salary">${careerDetails.averageSalary}</span>
                    </div>
                </div>
                <p>${careerDetails.description}</p>
            </div>
            
            <ul class="nav nav-tabs mb-3" id="careerTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab">Overview</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="requirements-tab" data-bs-toggle="tab" data-bs-target="#requirements" type="button" role="tab">Requirements</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="challenges-tab" data-bs-toggle="tab" data-bs-target="#challenges" type="button" role="tab">Challenges</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="resources-tab" data-bs-toggle="tab" data-bs-target="#resources" type="button" role="tab">Resources</button>
                </li>
            </ul>
            
            <div class="tab-content" id="careerTabContent">
                <div class="tab-pane fade show active" id="overview" role="tabpanel">
                    <h6>Job Roles</h6>
                    <div class="mb-3">
                        ${careerDetails.jobRoles.map(role => `<span class="career-tag me-2 mb-2">${role}</span>`).join('')}
                    </div>
                    <h6>Study Resources</h6>
                    <p>${careerDetails.studyResources}</p>
                </div>
                
                <div class="tab-pane fade" id="requirements" role="tabpanel">
                    <h6>Key Subjects</h6>
                    <ul>
                        ${careerDetails.keySubjects.map(subject => `<li>${subject}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="tab-pane fade" id="challenges" role="tabpanel">
                    <h6>Potential Challenges</h6>
                    <p>${careerDetails.challenges}</p>
                    <div class="alert alert-warning">
                        <strong>Note:</strong> These challenges are normal parts of career growth and can be overcome with proper preparation and mindset.
                    </div>
                </div>
                
                <div class="tab-pane fade" id="resources" role="tabpanel">
                    <h6>Recommended YouTube Channels</h6>
                    <div class="row">
                        ${careerDetails.youtubeChannels.map(channel => `
                            <div class="col-md-6 mb-2">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-youtube text-danger me-2"></i>
                                    <span>${channel}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>`;
        
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
    }
    
    filterCareers(category) {
        this.displayCareers(category);
        
        // Update filter button states
        document.querySelectorAll('.btn-group .btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    }
    
    updateAdminStats() {
        const userCount = document.getElementById('userCount');
        const assessmentCount = document.getElementById('assessmentCount');
        const careerCount = document.getElementById('careerCount');
        
        if (userCount) userCount.textContent = this.users.length - 1; // Exclude admin
        if (assessmentCount) {
            // Count users who have taken assessment
            let count = 0;
            this.users.forEach(user => {
                if (sessionStorage.getItem(`responses_${user.id}`)) count++;
            });
            assessmentCount.textContent = count;
        }
        
        if (careerCount) {
            let totalCareers = 0;
            Object.values(this.careerData).forEach(categoryData => {
                totalCareers += categoryData.length;
            });
            careerCount.textContent = totalCareers;
        }
    }
    
    exportData() {
        const data = {
            users: this.users.filter(u => !u.isAdmin),
            totalCareers: Object.values(this.careerData).reduce((acc, cat) => acc + cat.length, 0),
            responses: []
        };
        
        // Collect all responses
        this.users.forEach(user => {
            const responses = sessionStorage.getItem(`responses_${user.id}`);
            if (responses) {
                data.responses.push({
                    userId: user.id,
                    userName: user.name,
                    responses: JSON.parse(responses)
                });
            }
        });
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'career_advisor_data.json';
        link.click();
        URL.revokeObjectURL(url);
        
        this.showAlert('Data exported successfully!', 'success');
    }
    
    viewUserResponses() {
        let responseData = 'User Assessment Responses\n\n';
        let hasResponses = false;
        
        this.users.forEach(user => {
            if (!user.isAdmin) {
                const responses = sessionStorage.getItem(`responses_${user.id}`);
                if (responses) {
                    hasResponses = true;
                    responseData += `${user.name}\n`;
                    const respObj = JSON.parse(responses);
                    Object.entries(respObj).forEach(([qId, answer]) => {
                        const question = this.questions.find(q => q.id == qId);
                        if (question) {
                            responseData += `Q: ${question.question.substring(0, 50)}...\nA: ${Array.isArray(answer) ? answer.join(', ') : answer}\n\n`;
                        }
                    });
                    responseData += '---\n\n';
                }
            }
        });
        
        if (!hasResponses) {
            responseData += 'No assessment responses found.';
        }
        
        alert(responseData);
    }
    
    generateReport() {
        const report = `Career Advisor Report
Generated on: ${new Date().toLocaleDateString()}

Users: ${this.users.length - 1}
Assessments Completed: ${this.users.filter(u => sessionStorage.getItem(`responses_${u.id}`)).length}
Total Career Options: ${Object.values(this.careerData).reduce((acc, cat) => acc + cat.length, 0)}

Most Popular Careers:
- Software Developer
- Data Scientist
- Doctor
- Digital Marketing Specialist
- Civil Engineer`;
        
        alert(report);
        this.showAlert('Report generated!', 'success');
    }
    
    showAlert(message, type) {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(alertDiv);
        
        // Auto-dismiss after 3 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 3000);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.app = new CareerAdvisorApp();
});