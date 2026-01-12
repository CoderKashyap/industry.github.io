// Animated Counter Script for Stats Section
// This script animates numbers when they come into view

document.addEventListener('DOMContentLoaded', function() {
    
    // Function to parse the stat value and extract number and suffix
    function parseStatValue(text) {
        const match = text.match(/([+\-])?(\d+,?\d*\.?\d*)(%|\+)?/);
        if (!match) return null;
        
        return {
            prefix: match[1] || '',
            number: parseFloat(match[2].replace(',', '')),
            suffix: match[3] || text.replace(/[+\-\d,.\s]/g, '')
        };
    }

    // Function to format number with commas
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Function to animate a single counter
    function animateCounter(element, targetValue, duration = 2000) {
        const parsed = parseStatValue(targetValue);
        if (!parsed) return;

        const { prefix, number, suffix } = parsed;
        const startValue = 0;
        const increment = number / (duration / 16); // 60fps
        let currentValue = startValue;

        const timer = setInterval(() => {
            currentValue += increment;
            
            if (currentValue >= number) {
                currentValue = number;
                clearInterval(timer);
            }

            // Format the display value
            let displayValue = Math.floor(currentValue);
            
            // Add commas for thousands
            if (number >= 1000) {
                displayValue = formatNumber(displayValue);
            }

            // Update element with prefix and suffix
            element.textContent = `${prefix}${displayValue}${suffix}`;
        }, 16);
    }

    // Set up Intersection Observer
    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of element is visible
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                
                const statNumbers = entry.target.querySelectorAll('.stat-number-two');
                
                statNumbers.forEach((statNumber, index) => {
                    const targetValue = statNumber.getAttribute('data-target') || statNumber.textContent;
                    
                    // Stagger animation for multiple stats
                    setTimeout(() => {
                        animateCounter(statNumber, targetValue, 2000);
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    // Observe the stats section
    const statsSection = document.querySelector('.stats-sectio-two');
    if (statsSection) {
        // Store original values in data attributes
        const statNumbers = statsSection.querySelectorAll('.stat-number-two');
        statNumbers.forEach(statNumber => {
            if (!statNumber.getAttribute('data-target')) {
                statNumber.setAttribute('data-target', statNumber.textContent);
            }
            statNumber.textContent = '0'; // Start from 0
        });
        
        observer.observe(statsSection);
    }
});