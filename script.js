
 function getResponse() {
            let userInput = document.getElementById("user-input").value.toLowerCase();
            if (userInput.trim() === "") {
                alert("Please type a question before sending.");
                return;
            }
            let response = careerChatbotResponse(userInput);
            document.getElementById("response-container").innerText = "Chatbot: " + response;
            document.getElementById("user-input").value = ""; // Clear input after sending
        }

        function careerChatbotResponse(userInput) {
            let responses = {
                "career advice": [
                    "Exploring your strengths and passions can help narrow down career options. Have you considered any specific field?",
                    "Building a professional network on LinkedIn can open up new career opportunities.",
                    "Researching different career paths and talking to professionals can provide insights into what might suit you best.",
                    "Consider shadowing someone in your desired field to gain firsthand experience."
                ],
                "job search": [
                    "Tailoring your resume for each job can make a big difference!",
                    "Networking and attending industry events can improve your chances of finding a job.",
                    "Consider improving your LinkedIn profile; it’s a great tool for job hunting.",
                    "Don't hesitate to follow up on your applications; it shows initiative!"
                ],
                "academic guidance": [
                    "Choosing the right major depends on your career goals. Are you leaning towards any particular field?",
                    "Internships and real-world projects are great ways to gain experience while studying.",
                    "Higher studies in a field you’re passionate about can open doors to specialized roles.",
                    "Consider online courses or certifications to boost your knowledge in your area of interest."
                ],
                "thank": [
                    "You're welcome! I'm here to help with any other career questions.",
                    "Happy to help! Let me know if you have more questions."
                ],
                "default": [
                    "Could you tell me more about your career question?",
                    "I'm here to help with any career-related queries. Please ask away!"
                ]
            };

            if (userInput.includes("career") || userInput.includes("job") || userInput.includes("advice")) {
                return responses["career advice"][Math.floor(Math.random() * responses["career advice"].length)];
            } else if (userInput.includes("search") || userInput.includes("find")) {
                return responses["job search"][Math.floor(Math.random() * responses["job search"].length)];
            } else if (userInput.includes("study") || userInput.includes("academic")) {
                return responses["academic guidance"][Math.floor(Math.random() * responses["academic guidance"].length)];
            } else if (userInput.includes("thank")) {
                return responses["thank"][Math.floor(Math.random() * responses["thank"].length)];
            } else {
                return responses["default"][Math.floor(Math.random() * responses["default"].length)];
            }
        }
