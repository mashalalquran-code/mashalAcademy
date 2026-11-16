export let
    glanceCards = [
        {
            avatar: {
                outerColor: " bg-primary-transparent",
                innerColor: " bg-primary",
                icon: "ri-lightbulb-flash-line"
            },
            title: "Unparalleled Expertise",
            description:
                "Our team combines years of industry experience with a deep understanding of the latest trends and technologies to deliver exceptional results.",
        },
        {
            avatar: {
                outerColor: " bg-secondary-transparent",
                innerColor: " bg-secondary",
                icon: "ri-shield-star-line"
            },
            title: "Proven Track Record",
            description:
                "With a portfolio of successful projects and satisfied clients, we have a history of delivering high-quality outcomes on time and within budget.",
        },
        {
            avatar: {
                outerColor: " bg-success-transparent",
                innerColor: " bg-success svg-white",
                icon: "ri-shake-hands-line"
            },
            title: "Commitment to Quality",
            description:
                "We are dedicated to maintaining the highest standards in everything we do, from the initial consultation to the final delivery.",
        }
    ],

    serviceCards = [
        {
            avatarClass: " bg-primary  primary ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M215,168.71a96.42,96.42,0,0,1-30.54,37l-9.36-9.37a8,8,0,0,0-3.63-2.09L150,188.59a8,8,0,0,1-5.88-8.9l2.38-16.2a8,8,0,0,1,4.84-6.22l30.46-12.66a8,8,0,0,1,8.47,1.49ZM159.89,105L182.06,79.2A8,8,0,0,0,184,74V50A96,96,0,0,0,50.49,184.65l9.92-6.52A8,8,0,0,0,64,171.49l.21-36.23a8.06,8.06,0,0,1,1.35-4.41l20.94-31.3a8,8,0,0,1,11.34-2l19.81,13a8.06,8.06,0,0,0,5.77,1.45l31.46-4.26A8,8,0,0,0,159.89,105Z" opacity="0.2"></path>
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40Z"></path>
            </svg>`,
            title: "Business Audit",
            description: "Justo aliquyam duo vero clita aliquyam vero eirmod stet amet dolorem ipsum."
        },
        {
            avatarClass: " bg-secondary  secondary ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path>
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path>
            </svg>`,
            title: "Marketing",
            description: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium."
        },
        {
            avatarClass: " bg-success  success ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M208,40V208H152V40Z" opacity="0.2"></path>
              <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Z"></path>
            </svg>`,
            title: "Trading",
            description: "Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim.trande your product."
        },
        {
            avatarClass: " bg-info  info ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M224,64l-12.16,66.86A16,16,0,0,1,196.1,144H70.55L56,64Z" opacity="0.2"></path>
              <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87Z"></path>
            </svg>`,
            title: "Ecommerce",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiiss."
        },
        {
            avatarClass: " bg-warning  warning ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M16,152H48v56H16a8,8,0,0,1-8-8V160A8,8,0,0,1,16,152ZM204,56a28,28,0,0,0-12,2.71h0A28,28,0,1,0,176,85.29h0A28,28,0,1,0,204,56Z" opacity="0.2"></path>
              <path d="M230.33,141.06a24.43,24.43,0,0,0-21.24-4.23l-41.84,9.62A28,28,0,0,0,140,112H89.94a31.82,31.82,0,0,0-22.63,9.37L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Z"></path>
            </svg>`,
            title: "Financial Plans",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
        },
        {
            avatarClass: " bg-tealmain  teal ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M224,56l-96,88L32,56Z" opacity="0.2"></path>
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
            </svg>`,
            title: "Email Services",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
        },
        {
            avatarClass: " bg-danger  danger ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z" opacity="0.2"></path>
              <path d="M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68Z"></path>
            </svg>`,
            title: "Skilled",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
        },
        {
            avatarClass: " bg-pinkmain  pink ",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path>
              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z"></path>
            </svg>`,
            title: "Planning",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."
        }
    ],

    teamMembers = [
        {
            color: "primary",
            image: "./assets/images/faces/team/1.png",
            name: "Mason Wallace",
            position: "Project Manager",
            desc: `Aliquam ullamcorper neque vitae dui
        ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.`,
        },
        {
            color: "secondary",
            image: "./assets/images/faces/team/2.png",
            name: "Henry Morgan",
            position: "Team Lead",
            desc: `Aliquam ullamcorper neque vitae dui
        ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.`,
        },
        {
            color: "success",
            image: "./assets/images/faces/team/3.png",
            name: "Lucas Hayes",
            position: "HR Manager",
            desc: `Aliquam ullamcorper neque vitae dui
        ullamcorper, at varius erat feugiat. Proin aliquam, purus ut.`,
        },
        {
            color: "info",
            image: "./assets/images/faces/team/4.png",
            name: "Chloe Lewis",
            position: "Director",
            desc: `Aliquam ullamcorper neque vitae dui
        ullamcorper, at varius erat feugiat. Proin aliquam, purus ut`,
        },

    ],
    pricingPlans = [
        {
            title: "Basic",
            description: "Essential features for a magical start",
            price: "$9.99",
            period: "Per Month",
            extraCost: "+20/",
            extraCostText:'Person Per month',
            status: "Current Plan",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
      <path d="M80,104V208H32a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8Z" opacity="0.2"></path>
      <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
    </svg>`,
            svgClass: "secondary",
            features: [
                { description: "Timeless Assistance", badge: { text: "unlimited", class: "badge bg-secondary-transparent rounded-full", } },
                { description: "Premium Experience",  },
                { description: "Instant Access",  },
                { description: "Infinite Updates",  },
                { description: "Risk-Free Trial", badge: { text: "7 Days", } },
                { description: "Satisfaction Guarantee", badge: { text: "30 Days", } },
            ],
            buttonClass: "ti-btn-soft-secondary"
        },
        {
            title: "Pro",
            description: "Essential features for a magical start",
            price: "$19.99",
            period: "Per Month",
            extraCost: "+20/",
            extraCostText:'Person Per month',
            status: "Recommended",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
      <path d="M128,48v80H40.87A146.29,146.29,0,0,1,40,112V56a8,8,0,0,1,8-8Zm0,80V232s78.06-21.3,87.13-104Z" opacity="0.2"></path>
      <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM120,220.55a130.85,130.85,0,0,1-30.93-18.74c-21.15-17.3-34.2-39.37-39-65.81H120ZM120,120H48.23c-.15-2.63-.23-5.29-.23-8l0-56h72Zm47.4,81.42A131.31,131.31,0,0,1,136,220.53V136h69.91C201.16,162.24,188.27,184.18,167.4,201.42ZM208,112c0,2.71-.08,5.37-.23,8H136V56h72Z"></path>
    </svg>`,
            svgClass: "primary",
            features: [
                { description: "Timeless Assistance", badge: { text: "New", class: "badge bg-primary-transparent rounded-full", } },
                { description: "Premium Experience",  },
                { description: "Instant Access",  },
                { description: "Infinite Updates",  },
                { description: "Risk-Free Trial", badge: { text: "7 Days", } },
                { description: "Satisfaction Guarantee", badge: { text: "30 Days", } },
            ],
            buttonClass: "ti-btn-primary"
        },
        {
            title: "Premium",
            description: "Pinnacle excellence, VIP support.",
            price: "$29.99",
            period: "Per Month",
            extraCost: "+20/",
            extraCostText:'Person Per month',
            status: "New Plan",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
      <path d="M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z" opacity="0.2"></path>
      <path d="M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.50-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z"></path>
    </svg>`,
            svgClass: "success",
            features: [
                { description: "Timeless Assistance", badge: { text: "New", class: "badge bg-success-transparent rounded-full", } },
                { description: "Premium Experience",  },
                { description: "Instant Access",  },
                { description: "Infinite Updates",  },
                { description: "Risk-Free Trial", badge: { text: "14 Days", } },
                { description: "Satisfaction Guarantee", badge: { text: "60 Days", } },
            ],
            buttonClass: "ti-btn-soft-success"
        }
    ];