
        document.addEventListener('DOMContentLoaded', function() {
            // Navigation interaction
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            // Transaction items interaction
            const transactionItems = document.querySelectorAll('.transaction-item');
            transactionItems.forEach(item => {
                item.addEventListener('click', function() {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                });
            });

            // Quick action buttons
            const actionButtons = document.querySelectorAll('.action-btn');
            actionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const text = this.querySelector('.action-text').textContent;
                    showNotification(`${text} feature coming soon!`);
                });
            });

            // Contact items interaction
            const contactItems = document.querySelectorAll('.contact-item');
            contactItems.forEach(item => {
                item.addEventListener('click', function() {
                    const name = this.querySelector('.contact-name').textContent;
                    showNotification(`Quick transfer to ${name}`);
                });
            });

            // Floating action button
            const floatingAction = document.querySelector('.floating-action');
            floatingAction.addEventListener('click', function() {
                showNotification('New transaction started!');
            });

            // Search functionality
            const searchInput = document.querySelector('.search-input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const transactions = document.querySelectorAll('.transaction-item');
                
                transactions.forEach(transaction => {
                    const name = transaction.querySelector('.transaction-name').textContent.toLowerCase();
                    if (name.includes(searchTerm)) {
                        transaction.style.display = 'flex';
                    } else {
                        transaction.style.display = 'none';
                    }
                });
            });

            // Notification system
            function showNotification(message) {
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(79, 172, 254, 0.9);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 24px;
                    font-size: 14px;
                    font-weight: 600;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                    animation: slideDown 0.3s ease;
                `;
                notification.textContent = message;
                document.body.appendChild(notification);

                setTimeout(() => {
                    notification.style.animation = 'slideUp 0.3s ease';
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                }, 2000);
            }

            // Add CSS for notification animations
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideDown {
                    from {
                        transform: translateX(-50%) translateY(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(-50%) translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes slideUp {
                    from {
                        transform: translateX(-50%) translateY(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(-50%) translateY(-100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);

            // Balance card tap interaction
            const balanceCard = document.querySelector('.balance-card');
            balanceCard.addEventListener('click', function() {
                const currentBalance = this.querySelector('.balance-amount');
                const originalText = currentBalance.textContent;
                currentBalance.textContent = '••••••••';
                
                setTimeout(() => {
                    currentBalance.textContent = originalText;
                }, 2000);
            });

            // Loading states for transaction items
            function simulateLoading() {
                const transactions = document.querySelectorAll('.transaction-item');
                transactions.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('loading-shimmer');
                        setTimeout(() => {
                            item.classList.remove('loading-shimmer');
                        }, 1000);
                    }, index * 200);
                });
            }

            // Simulate loading on page load
            setTimeout(simulateLoading, 1000);

            // Pull to refresh simulation
            let startY = 0;
            let currentY = 0;
            let pulling = false;

            document.addEventListener('touchstart', function(e) {
                startY = e.touches[0].clientY;
                pulling = true;
            });

            document.addEventListener('touchmove', function(e) {
                if (!pulling) return;
                currentY = e.touches[0].clientY;
                const diff = currentY - startY;
                
                if (diff > 0 && window.scrollY === 0) {
                    e.preventDefault();
                    const header = document.querySelector('.header');
                    header.style.transform = `translateY(${Math.min(diff / 3, 50)}px)`;
                }
            });

            document.addEventListener('touchend', function() {
                if (!pulling) return;
                pulling = false;
                
                const diff = currentY - startY;
                const header = document.querySelector('.header');
                
                if (diff > 100) {
                    showNotification('Refreshing...');
                    setTimeout(simulateLoading, 500);
                }
                
                header.style.transform = '';
            });

            // Card number masking/unmasking
            const cardNumber = document.querySelector('.card-number');
            cardNumber.addEventListener('click', function() {
                if (this.textContent.includes('••••')) {
                    this.textContent = '1234 5678 9012 7890';
                } else {
                    this.textContent = '•••• •••• •••• 7890';
                }
            });

            // Smooth scrolling for better UX
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Add ripple effect to buttons
            function addRippleEffect(element) {
                element.addEventListener('click', function(e) {
                    const ripple = document.createElement('span');
                    const rect = this.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        background: rgba(255, 255, 255, 0.3);
                        border-radius: 50%;
                        transform: scale(0);
                        animation: ripple 0.6s ease-out;
                        pointer-events: none;
                    `;
                    
                    this.style.position = 'relative';
                    this.style.overflow = 'hidden';
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            }

            // Add ripple to all buttons
            document.querySelectorAll('button').forEach(addRippleEffect);

            // Add ripple animation CSS
            const rippleStyle = document.createElement('style');
            rippleStyle.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(rippleStyle);
        });