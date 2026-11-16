import { ApexOptions } from "ng-apexcharts"

export let
    cardData = [
        {
            title: 'Total Sales',
            value: '32,981',
            percentage: '0.29%',
            linkText: 'View all sales',
            linkHref: 'javascript:void(0);',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M168,88a40,40,0,0,1-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,  // Path for the icon
            svgClass: 'avatar avatar-md bg-primary svg-white avatar-rounded',
            textColor: 'text-white',
            changeColor: 'text-success'
        },
        {
            title: 'Total Revenue',
            value: '$14,32,145',
            percentage: '3.45%',
            linkText: 'Complete revenue',
            linkHref: 'javascript:void(0);',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
            svgClass: 'avatar avatar-md bg-secondary svg-white avatar-rounded',
            textColor: 'text-black',
            changeColor: 'text-secondary'
        },
        {
            title: 'Page Views',
            value: '4,678',
            percentage: '11.54%',
            linkText: 'Total page views',
            linkHref: 'javascript:void(0);',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
            svgClass: 'avatar avatar-md bg-success svg-white avatar-rounded',
            textColor: 'text-white',
            changeColor: 'text-success'
        },
        {
            title: 'Profit By Sale',
            value: '$645',
            percentage: '0.18%',
            linkText: 'Total profit earned',
            linkHref: 'javascript:void(0);',
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="180" cy="132" r="12"></circle></svg>`,
            svgClass: 'avatar avatar-md bg-info svg-white avatar-rounded',
            textColor: 'text-white',
            changeColor: 'text-success'
        }
    ],
    countriesData = [
        {
            name: 'United States',
            flag: './assets/images/flags/us_flag.jpg',
            sales: '32,190 Sales',
            revenue: '$32,190',
            percentage: '0.27%',
            trend: 'up',
        },
        {
            name: 'Germany',
            flag: './assets/images/flags/germany_flag.jpg',
            sales: '8,798 Sales',
            revenue: '$29,234',
            percentage: '0.12%',
            trend: 'up',
        },
        {
            name: 'Mexico',
            flag: './assets/images/flags/mexico_flag.jpg',
            sales: '16,885 Sales',
            revenue: '$26,166',
            percentage: '0.75%',
            trend: 'down',
        },
        {
            name: 'UAE',
            flag: './assets/images/flags/uae_flag.jpg',
            sales: '14,885 Sales',
            revenue: '$24,263',
            percentage: '1.45%',
            trend: 'up',
        },
        {
            name: 'Argentina',
            flag: './assets/images/flags/argentina_flag.jpg',
            sales: '17,578 Sales',
            revenue: '$23,897',
            percentage: '0.36%',
            trend: 'up',
        },
        {
            name: 'Russia',
            flag: './assets/images/flags/russia_flag.jpg',
            sales: '10,118 Sales',
            revenue: '$20,212',
            percentage: '0.68%',
            trend: 'down',
        },
    ],

    activities = [
        {
            id: 1,
            descriptionPrefix: 'Jane Smith ordered 5 new units of ',
            highlightText: 'Product Y',
            highlightClass: 'text-primary font-semibold',
            descriptionSuffix: '.',
            time: '12:45 Am'
        },
        {
            id: 2,
            descriptionPrefix: 'Scheduled demo with potential client DEF for next Tuesday',
            highlightText: '',
            highlightClass: '',
            descriptionSuffix: '',
            time: '03:26 Pm'
        },
        {
            id: 3,
            descriptionPrefix: 'Product X price updated to ',
            highlightText: '$XX.XX',
            highlightClass: 'text-success font-semibold',
            descriptionSuffix: ' per every unit',
            time: '08:52 Pm'
        },
        {
            id: 4,
            descriptionPrefix: 'Database backup completed successfully',
            highlightText: '',
            highlightClass: '',
            descriptionSuffix: '',
            time: '02:54 Am'
        },
        {
            id: 5,
            descriptionPrefix: 'Generated ',
            highlightText: '$10,000',
            highlightClass: 'text-warning font-semibold',
            descriptionSuffix: ' in revenue',
            time: '11:38 Am'
        },
        {
            id: 6,
            descriptionPrefix: 'Processed refund for Order ',
            highlightText: '#13579',
            highlightClass: 'text-danger font-semibold',
            descriptionSuffix: ' due to defective item',
            time: '01:42 Pm'
        }
    ],

    categories = [
        {
            name: 'Electronics',
            sales: "1,754",
            change: 'Increased by ',
            percentage: '0.64%',
            trend: 'up',
            salesText: 'Sales',
            icon: 'ti ti-trending-up',
            iconColor: 'text-success'
        },
        {
            name: 'Accessories',
            sales: "1,234",
            change: 'Decreased by ',
            percentage: '2.75%',
            trend: 'down',
            salesText: 'Sales',
            icon: 'ti ti-trending-down',
            iconColor: 'text-danger'
        },
        {
            name: 'Home Appliances',
            sales: 878,
            change: 'Increased by ',
            percentage: '1.54%',
            trend: 'up',
            salesText: 'Sales',
            icon: 'ti ti-trending-up',
            iconColor: 'text-success'
        },
        {
            name: 'Beauty Products',
            sales: 270,
            change: 'Increased by ',
            percentage: '1.54%',
            trend: 'up',
            salesText: 'Sales',
            icon: 'ti ti-trending-up',
            iconColor: 'text-success'
        },
        {
            name: 'Furniture',
            sales: 456,
            change: 'Decreased by ',
            percentage: '0.12%',
            trend: 'down',
            salesText: 'Sales',
            icon: 'ti ti-trending-down',
            iconColor: 'text-danger'
        }
    ],

    companiesColumn = [
        {
            header: 'Payment Mode', tableHeadColumn: 'font-semibold text-[0.9rem]'
        },
        {
            header: 'Amount Paid', tableHeadColumn: '!text-end font-semibold text-[0.9rem]'
        },
    ],
    transactions = [
        {
            method: 'Paypal ****2783',
            type: 'Online Transaction',
            icon: 'ri-paypal-line',
            iconColor: 'bg-primary-transparent',
            amount: '$1,234.78',
            date: 'Nov 22,2024',
        },
        {
            method: 'Digital Wallet',
            type: 'Online Transaction',
            icon: 'ri-wallet-3-line',
            iconColor: 'bg-secondary-transparent',
            amount: '$623.99',
            date: 'Nov 22,2024',
        },
        {
            method: 'Mastro Card ****7893',
            type: 'Card Payment',
            icon: 'ri-mastercard-line',
            iconColor: 'bg-success-transparent',
            amount: '$1,324',
            date: 'Nov 21,2024',
        },
        {
            method: 'Cash On Delivery',
            type: 'Pay On Delivery',
            icon: 'ti ti-currency-dollar',
            iconColor: 'bg-info-transparent',
            amount: '$1,123.49',
            date: 'Nov 20,2024',
        },
        {
            method: 'Visa Card ****2563',
            type: 'Card Payment',
            icon: 'ri-visa-line',
            iconColor: 'bg-warning-transparent',
            amount: '$1,289',
            date: 'Nov 18,2024',
        },
    ],

    orderColumns = [
        { header: 'Product', field: 'product' },
        { header: 'Category', field: 'Category' },
        { header: 'Quantity', field: 'quantity' },
        { header: 'Customer', field: 'customer' },
        { header: 'Status', field: 'status' },
        { header: 'Price', field: 'price' },
        { header: 'Date Ordered', field: 'date' },
        { header: 'Actions', field: 'actions' }
    ],
    products = [
        {
            id: 'checkboxNoLabeljob2',
            image: './assets/images/ecommerce/png/1.png',
            name: 'Classic tufted leather sofa',
            brand: 'Pixel',
            category: 'Furniture',
            quantity: 1,
            assignedTo: 'Lucas Hayes',
            avatar: './assets/images/faces/1.jpg',
            checked: false,
            status: 'Shipped',
            price: '$1200.00',
            date: '2024-05-18',
        },
        {
            id: 'checkboxNoLabeljob3',
            image: './assets/images/ecommerce/png/36.png',
            name: 'Rose Flower Pot',
            brand: 'Sonic',
            category: 'Decoration',
            quantity: 2,
            avatar: './assets/images/faces/2.jpg',
            assignedTo: 'Abigail Scott',
            checked: true,
            status: 'Delivered',
            price: '$250.00',
            date: '2024-05-19',
        },
        {
            id: 'checkboxNoLabeljob4',
            image: './assets/images/ecommerce/png/31.png',
            name: 'Leather Handbag',
            brand: 'Elite',
            category: 'Fashion',
            quantity: 1,
            avatar: './assets/images/faces/3.jpg',
            assignedTo: 'Mason Wallace',
            checked: true,
            status: 'Processing',
            price: '$800.00',
            date: '2024-05-20',
        },
        {
            id: 'checkboxNoLabeljob5',
            image: './assets/images/ecommerce/png/14.png',
            name: 'Polaroid Medium Camera',
            brand: 'Bright',
            category: 'Electronics',
            quantity: 3,
            avatar: './assets/images/faces/4.jpg',
            assignedTo: 'Chloe Lewis',
            checked: false,
            status: 'Pending',
            price: '$50.00',
            date: '2024-05-20',
        },
        {
            id: 'checkboxNoLabeljob7',
            image: './assets/images/ecommerce/png/13.png',
            name: 'Digital Watch',
            brand: 'Nova',
            category: 'Fashion',
            quantity: 2,
            avatar: './assets/images/faces/5.jpg',
            assignedTo: 'Henry Morgan',
            checked: false,
            status: 'Shipped',
            price: '$100.00',
            date: '2024-05-21',
        }
    ],

    browsers = [
        {
            name: 'Chrome',
            image: './assets/images/browsers/chrome.png',
            description: 'Google LLC',
            percentageChange: 3.26,
            users: 13546,
            progress: 70,
            badge: 'text-success',
            trendIcon: 'ti ti-arrow-narrow-up',
            progressColor: 'primary',
            badgeLabel: 'Increased',
        },
        {
            name: 'Edge',
            image: './assets/images/browsers/edge.png',
            description: 'Microsoft Corp',
            percentageChange: 0.96,
            users: 11322,
            progress: 60,
            badge: 'text-danger',
            trendIcon: 'ti ti-arrow-narrow-down',
            progressColor: 'secondary',
            badgeLabel: 'Decreased'
        },
        {
            name: 'Firefox',
            image: './assets/images/browsers/firefox.png',
            description: 'Mozilla Corp',
            percentageChange: 1.64,
            users: 6236,
            progress: 30,
            badge: 'text-success',
            trendIcon: 'ti ti-arrow-narrow-up',
            progressColor: 'success',
            badgeLabel: 'Increased'
        },
        {
            name: 'Safari',
            image: './assets/images/browsers/safari.png',
            description: 'Apple Inc',
            percentageChange: 6.38,
            users: 10235,
            progress: 50,
            badge: 'text-success',
            trendIcon: 'ti ti-arrow-narrow-up',
            progressColor: 'warning',
            badgeLabel: 'Increased'
        },
        {
            name: 'UCBrowser',
            image: './assets/images/browsers/uc.png',
            description: 'UCWeb',
            percentageChange: 5.18,
            users: 14965,
            progress: 80,
            badge: 'text-success',
            trendIcon: 'ti ti-arrow-narrow-up',
            progressColor: 'danger',
            badgeLabel: 'Increased'
        },
        {
            name: 'Opera',
            image: './assets/images/browsers/opera.png',
            description: 'Opera Software AS',
            percentageChange: 1.65,
            users: 8432,
            progress: 40,
            badge: 'text-danger',
            trendIcon: 'ti ti-arrow-narrow-down',
            progressColor: 'info',
            badgeLabel: 'Decreased'
        },
        {
            name: 'Samsung Internet',
            image: './assets/images/browsers/samsung-internet.png',
            description: 'Samsung',
            percentageChange: 0.99,
            users: 4134,
            progress: 36,
            badge: 'text-success',
            trendIcon: 'ti ti-arrow-narrow-up',
            progressColor: 'orangemain',
            badgeLabel: 'Increased'
        }
    ],

    TopSellingcategories: ApexOptions = {
        series: [1754, 1234, 878, 270, 456],
        labels: ["Electrnoics", "Accesories", "Home Appliances", "Beauty Products", "Furniture"],
        chart: {
            height: 220,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
            dropShadow: {
                enabled: false,
            }
        },
        legend: {
            show: false,
        },
        grid: {
            padding: {
                bottom: 10
            },
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '80%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            fontFamily: "Montserrat, sans-serif",
                            offsetY: -5
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            color: undefined,
                            offsetY: 5,
                            fontWeight: 600,
                            fontFamily: "Montserrat, sans-serif",
                            formatter: function (val: any) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total Sales',
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#495057',
                        }
                    }
                }
            }
        },
        colors: ["var(--color-primary)", "rgba(255, 90, 41, 1)", "rgba(12, 199, 99, 1)", "rgba(12, 156, 252, 1)", 'rgba(255, 154, 19, 1)'],
    },


    OrderStatistics: ApexOptions = {
        series: [
            {
                name: "Delivered",
                data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 86],
                type: "area",
            },
            {
                name: "Pending",
                data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98],
                type: "line",
            }, {
                name: 'Cancelled',
                data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120]
            }
        ],
        chart: {
            type: "line",
            height: 345,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 7,
                left: 0,
                blur: 1,
                opacity: 0.05,
            },
        },
        colors: [
            "var(--color-primary)", "rgba(115,93,255,0.2)", "rgb(255, 90, 41)"
        ],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
            offsetX: 0,
            offsetY: 8,
            markers: {
                size: 4,
                strokeWidth: 2,
                offsetX: 0,
                offsetY: 0,


            } as any
        },
        stroke: {
            curve: 'smooth',
            width: [1.5, 1.5, 1.5],
            lineCap: 'round',
            dashArray: [0, 4, 0],
        },
        fill: {
            type: ['gradient', 'solid'],
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
                stops: [0, 90, 100],
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "rgba(115, 93, 255,0.1)",
                            opacity: 0.1
                        },
                        {
                            offset: 75,
                            color: "rgba(115, 93, 255,0.1)",
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: 'rgba(115, 93, 255,0.2)',
                            opacity: 1
                        }
                    ],
                    [
                        {
                            offset: 0,
                            color: 'rgb(255, 90, 41)',
                            opacity: 1
                        },
                        {
                            offset: 75,
                            color: 'rgb(255, 90, 41)',
                            opacity: 1
                        },
                        {
                            offset: 100,
                            color: 'rgb(255, 90, 41)',
                            opacity: 1
                        }
                    ],
                ]
            }
        },
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],


            axisBorder: {
                show: false,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',

                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90,
                show: true,
            }
        },
    },

    VisitorsReport: ApexOptions = {
        series: [
            {
                name: "This Week",
                data: [25, 50, 30, 55, 20, 45, 30],
                type: 'column',
            },
            {
                name: "Last Week",
                data: [35, 25, 40, 30, 45, 35, 60],
                type: 'line',
            }
        ],
        chart: {
            height: 245,
            type: 'line',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 7,
                left: 0,
                blur: 1,
                opacity: 0.05,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '35%',
            }
        },
        colors: ['var(--color-primary)', 'rgb(255, 90, 41)'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
            dashArray: [0, 3],
        },
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 2,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            show: false,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            }
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

            axisBorder: {
                show: false,
                color: 'rgba(119, 119, 142, 0.05)',
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: 'rgba(119, 119, 142, 0.05)',

                offsetX: 0,
                offsetY: 0
            },
            labels: {
                rotate: -90, show: true,
            }
        },
        legend: {
            show: true,
            position: "bottom",
            offsetX: 0,
            offsetY: 8,
        
            markers: {
                size: 4
            } as any
        },

    },
    VisitorsByGender: ApexOptions = {
        series: [18235, 12743, 5369, 16458],
        labels: ["male", "Female", "Others", "Not Mentioned"],
        chart: {
            height: 230,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                expandOnClick: false,
                donut: {
                    size: '80%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '20px',
                            color: '#495057',
                            fontFamily: "Montserrat, sans-serif",
                            offsetY: -35
                        },
                        value: {
                            show: true,
                            fontSize: '22px',
                            color: undefined,
                            offsetY: -25,
                            fontWeight: 600,
                            fontFamily: "Montserrat, sans-serif",
                            formatter: function (val: any) {
                                return val + "%"
                            }
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Total Visitors',
                            fontSize: '14px',
                            fontWeight: 400,
                            color: '#495057',
                        }
                    }
                }
            }
        },
        grid: {
            padding: {
                bottom: -85
            }
        },
        colors: ["var(--color-primary)", "rgba(255, 90, 41, 1)", "rgba(12, 199, 99, 1)", "rgba(12, 156, 252, 1)"],
    }
