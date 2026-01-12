  // CTA Button Click Handler
document.getElementById('ctaBtn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Growth Strategy Call booking form would open here!');
    // You can replace this with actual booking functionality
    // window.location.href = '/booking';
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});



















  const accordionData = [
            {
                title: "Content & Authority Development",
                subtitle: "Technology buyers look for clarity, credibility, and proof before engaging. We create content that supports technical evaluation and internal decision-making not just awareness.",
                items: [
                    "Use-case and solution-driven content frameworks",
                    "Technical case studies and delivery proof",
                    "Service and capability pages for complex offerings",
                    "Comparison and alternative pages",
                    "Industry-specific pillar content",
                    "Whitepapers, playbooks, and evaluation guides"
                ]
            },
            {
                title: "SEO, AEO & AI Search Optimization",
                subtitle: "Buyer discovery now happens across search engines and AI-powered answer platforms. We optimize your digital presence for SEO, AEO, and GEO to ensure visibility throughout the research cycle.",
                items: [
                    "Category, capability, and solution keyword mapping",
                    "Technical SEO for complex websites and service architectures",
                    "Intent-based content and site architecture",
                    "SERP feature and rich result optimization",
                    "AI search and answer engine optimization",
                    "Brand authority signals for AI visibility"
                ]
            },
            {
                title: "Demand Generation & Paid Growth",
                subtitle: "We design demand programs aligned to your GTM motion and ICP, not broad lead generation.",
                items: [
                    "LinkedIn demand and account-based campaigns",
                    "Search and paid media for high-intent queries",
                    "ABM display and retargeting programs",
                    "YouTube and video-led awareness campaigns",
                    "Offer, positioning, and messaging tests across funnel stages"
                ]
            },
            {
                title: "Conversion Rate Optimization (CRO)",
                subtitle: "Traffic without conversion efficiency slows growth. We optimize conversion paths to improve lead quality, sales readiness, and pipeline velocity.",
                items: [
                    "High-intent landing and demo page optimization",
                    "CTA, form, and funnel conversion optimization",
                    "Role-based messaging for buying committees",
                    "Trust signals, proof placement, and friction reduction",
                    "Continuous A/B testing and CRO experimentation"
                ]
            },
            {
                title: "Pipeline & Lead Conversion Optimization",
                subtitle: "Generating leads isn't enough. We focus on moving qualified demand forward through the funnel.",
                items: [
                    "Lead qualification and routing frameworks",
                    "Marketing and sales alignment workflows",
                    "MQL-to-SQL optimization strategies",
                    "Deal-stage content and asset mapping",
                    "Pipeline velocity and conversion improvement"
                ]
            },
            {
                title: "Marketing Automation & Buyer Nurturing",
                subtitle: "Long buying cycles require consistent, relevant engagement over time. We build automation systems that support extended decision journeys.",
                items: [
                    "Lead nurturing and education sequences",
                    "Onboarding and evaluation workflows",
                    "Segmentation based on ICP and intent signals",
                    "Service inquiry and conversion journeys",
                    "Expansion and cross-sell campaign frameworks"
                ]
            },
            {
                title: "Analytics, Attribution & Growth Intelligence",
                subtitle: "We measure what leadership teams care about pipeline, efficiency, and revenue contribution.",
                items: [
                    "Funnel and conversion path analysis",
                    "Attribution modeling across channels",
                    "Cost per opportunity and pipeline tracking",
                    "CAC and LTV measurement",
                    "A/B testing and continuous optimization"
                ]
            },
            {
                title: "Customer Experience, Retention & Expansion",
                subtitle: "Growth doesn't stop at acquisition. We help companies improve adoption, retention, and long-term value through aligned marketing and customer experience strategies.",
                items: [
                    "Product and service adoption content",
                    "Customer success enablement assets",
                    "Engagement and retention campaigns",
                    "Churn risk identification and mitigation",
                    "Customer advocacy and proof programs"
                ]
            },
            {
                title: "Social Media & B2B Influence Marketing",
                subtitle: "Social media for technology companies is not about reach it's about credibility, influence, and deal support. We help IT brands use social platforms to support long buying cycles, engage buying committees, and reinforce authority throughout the decision journey.",
                items: [
                    "LinkedIn organic strategy for IT decision-makers",
                    "Executive and leadership personal branding (CXOs, founders)",
                    "Thought leadership and technical narrative development",
                    "Content distribution aligned to ICP and buyer stages",
                    "Social proof amplification (case studies, wins, insights)",
                    "Community engagement and conversation-led growth",
                    "Social support for ABM and demand generation programs"
                ]
            }
        ];

        // Generate accordion HTML
        function createAccordionHTML(data) {
            return data.map((item, index) => `
                <div class="accordion-item" data-index="${index}">
                    <div class="accordion-header" role="button" tabindex="0" aria-expanded="false">
                        <div class="accordion-title-wrapper">
                            <div class="accordion-title">${item.title}</div>
                            <div class="accordion-subtitle">${item.subtitle}</div>
                        </div>
                        <div class="accordion-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-content-inner">
                            <div class="content-grid">
                                ${item.items.map((contentItem, i) => `
                                    <div class="content-item">
                                        <div class="content-icon">${String(i + 1).padStart(2, '0')}</div>
                                        <div class="content-text"> ${contentItem}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Initialize accordion
        const accordionWrapper = document.getElementById('accordionWrapper');
        accordionWrapper.innerHTML = createAccordionHTML(accordionData);

        // Accordion functionality
        function initAccordion() {
            const accordionItems = document.querySelectorAll('.accordion-item');

            accordionItems.forEach(item => {
                const header = item.querySelector('.accordion-header');
                const content = item.querySelector('.accordion-content');
                const contentInner = item.querySelector('.accordion-content-inner');

                function toggleAccordion() {
                    const isActive = item.classList.contains('active');
                    
                    // Close all items
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            const otherContent = otherItem.querySelector('.accordion-content');
                            const otherHeader = otherItem.querySelector('.accordion-header');
                            otherContent.style.maxHeight = '0px';
                            otherHeader.setAttribute('aria-expanded', 'false');
                        }
                    });

                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        content.style.maxHeight = '0px';
                        header.setAttribute('aria-expanded', 'false');
                    } else {
                        item.classList.add('active');
                        content.style.maxHeight = contentInner.scrollHeight + 'px';
                        header.setAttribute('aria-expanded', 'true');
                    }
                }

                // Click event
                header.addEventListener('click', toggleAccordion);

                // Keyboard accessibility
                header.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleAccordion();
                    }
                });
            });
        }

        // Initialize on page load
        initAccordion();

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const activeItems = document.querySelectorAll('.accordion-item.active');
                activeItems.forEach(item => {
                    const content = item.querySelector('.accordion-content');
                    const contentInner = item.querySelector('.accordion-content-inner');
                    content.style.maxHeight = contentInner.scrollHeight + 'px';
                });
            }, 250);
        });