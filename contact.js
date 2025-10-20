// Contact form validation
(function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    // Form fields
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    
    // Error message elements
    const nameError = document.getElementById('error-name');
    const emailError = document.getElementById('error-email');
    const subjectError = document.getElementById('error-subject');
    const messageError = document.getElementById('error-message');
    
    // Validation functions
    function validateName(value) {
        if (!value || value.trim() === '') {
            return 'Full name is required';
        }
        return '';
    }
    
    function validateEmail(value) {
        if (!value || value.trim() === '') {
            return 'Email address is required';
        }
        
        // Email regex pattern for validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
            return 'Please enter a valid email address (name@example.com)';
        }
        
        return '';
    }
    
    function validateSubject(value) {
        if (!value || value.trim() === '') {
            return 'Subject is required';
        }
        return '';
    }
    
    function validateMessage(value) {
        if (!value || value.trim() === '') {
            return 'Message is required';
        }
        
        if (value.trim().length < 10) {
            return 'Message must be at least 10 characters long';
        }
        
        return '';
    }
    
    // Display error message
    function showError(errorElement, inputElement, message) {
        errorElement.textContent = message;
        if (message) {
            inputElement.classList.add('error');
            inputElement.setAttribute('aria-invalid', 'true');
        } else {
            inputElement.classList.remove('error');
            inputElement.setAttribute('aria-invalid', 'false');
        }
    }
    
    // Clear all errors
    function clearErrors() {
        showError(nameError, nameInput, '');
        showError(emailError, emailInput, '');
        showError(subjectError, subjectInput, '');
        showError(messageError, messageInput, '');
    }
    
    // Validate individual field
    function validateField(input, validator, errorElement) {
        const errorMessage = validator(input.value);
        showError(errorElement, input, errorMessage);
        return errorMessage === '';
    }
    
    // Real-time validation on blur
    nameInput.addEventListener('blur', function() {
        validateField(nameInput, validateName, nameError);
    });
    
    emailInput.addEventListener('blur', function() {
        validateField(emailInput, validateEmail, emailError);
    });
    
    subjectInput.addEventListener('blur', function() {
        validateField(subjectInput, validateSubject, subjectError);
    });
    
    messageInput.addEventListener('blur', function() {
        validateField(messageInput, validateMessage, messageError);
    });
    
    // Clear error when user starts typing
    nameInput.addEventListener('input', function() {
        if (nameError.textContent) {
            showError(nameError, nameInput, '');
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (emailError.textContent) {
            showError(emailError, emailInput, '');
        }
    });
    
    subjectInput.addEventListener('input', function() {
        if (subjectError.textContent) {
            showError(subjectError, subjectInput, '');
        }
    });
    
    messageInput.addEventListener('input', function() {
        if (messageError.textContent) {
            showError(messageError, messageInput, '');
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Hide success message if visible
        successMessage.hidden = true;
        
        // Validate all fields
        const isNameValid = validateField(nameInput, validateName, nameError);
        const isEmailValid = validateField(emailInput, validateEmail, emailError);
        const isSubjectValid = validateField(subjectInput, validateSubject, subjectError);
        const isMessageValid = validateField(messageInput, validateMessage, messageError);
        
        // Check if all fields are valid
        const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;
        
        if (isFormValid) {
            // Form is valid - show success message
            successMessage.hidden = false;
            
            // Clear form
            form.reset();
            clearErrors();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Focus on success message for screen readers
            successMessage.focus();
            
            // Log form data (in real app, this would be sent to server)
            console.log('Form submitted successfully:', {
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value
            });
        } else {
            // Form is invalid - focus on first error
            if (!isNameValid) {
                nameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            } else if (!isSubjectValid) {
                subjectInput.focus();
            } else if (!isMessageValid) {
                messageInput.focus();
            }
        }
    });
    
    // Initialize form with no errors
    clearErrors();
})();
