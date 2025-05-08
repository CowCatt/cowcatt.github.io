/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
(function() {
    'use strict';
    
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    
    // Track last valid values
    let lastValidName = '';
    let lastValidPhone = '';
    
    // Validate name (letters and spaces only)
    nameInput.addEventListener('input', function() {
        const nameRegex = /^[A-Za-z ]*$/;
        if (nameRegex.test(this.value)) {
            lastValidName = this.value;
        } else {
            // Revert to last valid value
            this.value = lastValidName;
            
            // Show warning alert
            Swal.fire({
                title: 'Invalid Character',
                text: 'Name can only contain letters and spaces',
                icon: 'warning',
                confirmButtonColor: '#ffc800',
                confirmButtonText: 'OK',
                timer: 2000,
                timerProgressBar: true
            });
        }
    });
    
    // Validate phone (numbers only)
    phoneInput.addEventListener('input', function() {
        const phoneRegex = /^[0-9]*$/;
        if (phoneRegex.test(this.value)) {
            lastValidPhone = this.value;
        } else {
            // Revert to last valid value
            this.value = lastValidPhone;
            
            // Show warning alert
            Swal.fire({
                title: 'Invalid Character',
                text: 'Phone number can only contain digits',
                icon: 'warning',
                confirmButtonColor: '#ffc800',
                confirmButtonText: 'OK',
                timer: 2000,
                timerProgressBar: true
            });
        }
    });
    
    form.addEventListener('submit', function(event) {
        // Custom validation for name
        const nameRegex = /^[A-Za-z ]+$/;
        if (!nameRegex.test(nameInput.value)) {
            nameInput.classList.add('is-invalid');
            event.preventDefault();
            event.stopPropagation();
            
            Swal.fire({
                title: 'Invalid Name',
                text: 'Please enter a name with letters only',
                icon: 'error',
                confirmButtonColor: '#ffc800'
            });
            return;
        }
        
        // Custom validation for phone
        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phoneInput.value)) {
            phoneInput.classList.add('is-invalid');
            event.preventDefault();
            event.stopPropagation();
            
            Swal.fire({
                title: 'Invalid Phone',
                text: 'Please enter a phone number with digits only',
                icon: 'error',
                confirmButtonColor: '#ffc800'
            });
            return;
        }
        
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            
            // Get form values
            const formData = {
                name: nameInput.value,
                email: document.getElementById('email').value,
                phone: phoneInput.value,
                message: document.getElementById('message').value
            };
            
            console.log('Form data:', formData); // For debugging
            
            // Show success message
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for contacting us. We will get back to you soon.',
                icon: 'success',
                confirmButtonColor: '#ffc800',
                confirmButtonText: 'OK'
            }).then(() => {
                // Reset form after success
                form.reset();
                form.classList.remove('was-validated');
                nameInput.classList.remove('is-invalid');
                phoneInput.classList.remove('is-invalid');
                lastValidName = '';
                lastValidPhone = '';
            });
        }
        
        form.classList.add('was-validated');
    }, false);
})();