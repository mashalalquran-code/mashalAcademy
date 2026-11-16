import { ChangeDetectorRef, DestroyRef, inject, Component, DOCUMENT, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../services/language.service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { AppStateService } from '../../services/app-state.service';
import { Menu, NavService } from '../../services/nav.service';
import { Subscription, filter } from 'rxjs';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, } from 'rxjs/operators';
declare const HSStaticMethods: any;

interface Item {
  id: number;
  name: string;
  type: string;
  title: string;
  // Add other properties as needed
}
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class Header {
  readonly language = inject(LanguageService);
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly changeDetector = inject(ChangeDetectorRef);

  notificationCount: number = 5;
  public isCollapsed = true;
  collapse: any;
  closeResult = '';
  themeType: string | undefined;
  selectedItem: string | null = 'selectedItem'
  isOpen: boolean = false;
  title: any;
  public menuItems!: Menu[];
  public menuitemsSubscribe$!: Subscription;
  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions!: Observable<string[]>;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private appStateService: AppStateService,
    public navServices: NavService,
    private elementRef: ElementRef,
    public renderer: Renderer2,
    private router: Router, private activatedRoute: ActivatedRoute
  ) { }


   Selector = (selector: any) => document.querySelector(selector);

   SelectorAll = (selector: any) => document.querySelectorAll(selector);

  ngAfterViewInit(): void {
    if (typeof HSStaticMethods !== 'undefined') HSStaticMethods.autoInit();
  }
  ngOnInit(): void {
    const storedSelectedItem = localStorage.getItem('selectedItem');
    // this.updateSelectedItem();
    // If there's no selected item stored, set a default one
    if (!storedSelectedItem) {
      this.selectedItem = "Sales Dashboard"; // You can set any default item here
      localStorage.setItem('selectedItem', this.selectedItem);
    } else {
      this.selectedItem = storedSelectedItem;
    }
    this.navServices.items.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((menuItems) => {
      this.options = [];
      this.changeDetector.markForCheck();
      this.items = menuItems;
      this.items.map((item) => {
        if (item?.children) {
          item.children.map((childItem) => {
            if (childItem.type === "link") {
              this.title = childItem.title;
              this.options.push(this.title);
            }
            else if (childItem.type === "sub") {
              if (childItem?.children) {
                childItem?.children.map((childItem) => {
                  if (childItem.type === "link") {
                    this.title = childItem.title;
                    this.options.push(this.title);
                  }
                })
              }
            }

          })
        }
      });
    });

    this.text = '';
    this.translate.onLangChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.text) this.Search(this.text);
      this.changeDetector.markForCheck();
    });
    this.router.events.pipe(filter(event => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.updateSelectedItem();
      this.changeDetector.markForCheck();
    });


    this.filteredOptions = this.myControl.valueChanges.pipe(
      map(value => this._filter(value)),
    );
  }


  private _filter(value: any) {
    const filterValue = String(value ?? '').toLowerCase();
    this.items?.map((item) => {
      if (item?.children) {
        item.children.map((childItem) => {
          if (childItem.type === "link") {
            const { title, path } = childItem;
            if (this.translate.instant(title ?? '').toLowerCase() === filterValue) {
              this.router.navigate([path]);
            }
          }

        })
      }
    });


    return this.options.filter(option => this.translate.instant(option).toLowerCase().includes(filterValue));
  }



  selectEvent(item: string) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e: void) {
    // do something when input is focused
  }




  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  handleItemClick(title: string) {
    this.selectedItem = title;
    this.isOpen = false;
    localStorage.setItem('selectedItem', title);
  }


  openSearch(search: any) {
    // this.modalService.open(search);
  }


  toggleSidebar() {
    const html = this.doc.documentElement;
    // Check the window width
    if (window.innerWidth <= 992) {
      let dataToggled = html.getAttribute("data-toggled");

      if (dataToggled == "open") {
        html.setAttribute("data-toggled", "close");
      } else {
        html.setAttribute("data-toggled", "open");
      }
    }
    else {
      let menuNavLayoutType = html.getAttribute("data-nav-style");
      let verticalStyleType = html.getAttribute("data-vertical-style");

      if (menuNavLayoutType) {
        let dataToggled = html.getAttribute("data-toggled");
        if (dataToggled) {
          html.removeAttribute("data-toggled");
        } else {
          html.setAttribute(
            "data-toggled",
            menuNavLayoutType + "-closed",
          );
        }
      } else if (verticalStyleType) {
        let dataToggled = html.getAttribute("data-toggled");

        if (verticalStyleType == "doublemenu") {
          if (
            html.getAttribute("data-toggled") === "double-menu-open" && this.Selector(".double-menu-active")) {
            html.setAttribute("data-toggled", "double-menu-close");
          } else {
            if (this.Selector(".double-menu-active")) { html.setAttribute("data-toggled", "double-menu-open"); }
          }
        } else if (dataToggled) {
          html.removeAttribute("data-toggled");
        } else {
          switch (verticalStyleType) {
            case "closed":
              html.setAttribute(
                "data-toggled",
                "close-menu-close",
              );
              break;
            case "icontext":
              html.setAttribute(
                "data-toggled",
                "icon-text-close",
              );
              break;
            case "overlay":
              html.setAttribute(
                "data-toggled",
                "icon-overlay-close",
              );
              break;
            case "detached":
              html.setAttribute("data-toggled", "detached-close");
              break;
            default:
          }
        }
      }
    }
  }
  updateTheme(theme: string) {

    this.appStateService.updateState({ theme, menuColor: theme, headerColor: theme });
    if (theme == 'light') {
      this.appStateService.updateState({ theme, themeBackground: '', headerColor: 'light', menuColor: 'light' });
      let html = this.doc.documentElement;
      html?.style.removeProperty('--color-bodybg');
      html?.style.removeProperty('--color-darkbg');
      html?.style.removeProperty('--color-light');
      html?.style.removeProperty('--color-inputborder');
      if (window.innerWidth <= 992) {
        html?.setAttribute('data-toggled', 'close');
      }
    }
    if (theme == 'dark') {
      this.appStateService.updateState({ theme, themeBackground: '', headerColor: 'dark', menuColor: 'dark' });
      let html = this.doc.documentElement;
      html?.style.removeProperty('--color-bodybg');
      html?.style.removeProperty('--color-darkbg');
      html?.style.removeProperty('--color-light');

      html?.style.removeProperty('--input-border');
      if (window.innerWidth <= 992) {
        html?.setAttribute('data-toggled', 'close');
      }
    }
    this.language.syncDirection();
  }



  isCartEmpty: boolean = false;
  isNotifyEmpty: boolean = false;

  handleCardClick(event: MouseEvent) {
    // Prevent the click event from propagating to the container
    event.stopPropagation();
  }
  cartItems = [
    {
      id: 'row1',
      brand: 'Puma',
      name: 'header.product1',
      image: './assets/images/ecommerce/png/1.png',
      color: 'primary',
      originalPrice: 99,
      discountedPrice: 75,
      unitPrice: 32,
      quantity: 4
    },
    {
      id: 'row2',
      brand: 'Puma',
      name: 'header.product2',
      image: './assets/images/ecommerce/png/14.png',
      color: 'secondary',
      originalPrice: 149,
      discountedPrice: 120,
      unitPrice: 112,
      quantity: 12
    },
    {
      id: 'row3',
      brand: 'Puma',
      name: 'header.product3',
      image: './assets/images/ecommerce/png/33.png',
      color: 'success',
      originalPrice: 49,
      discountedPrice: 30,
      unitPrice: 64,
      quantity: 9
    },
    {
      id: 'row4',
      brand: 'Puma',
      name: 'header.product4',
      image: './assets/images/ecommerce/png/34.png',
      color: 'warning',
      originalPrice: 129,
      discountedPrice: 70,
      unitPrice: 230,
      quantity: 7
    },
    {
      id: 'row5',
      brand: 'Puma',
      name: 'header.product5',
      image: './assets/images/ecommerce/png/31.png',
      color: 'pinkmain',
      originalPrice: 249,
      discountedPrice: 200,
      unitPrice: 52,
      quantity: 5
    },
  ];

  cartItemCount = this.cartItems.length;


  updateQuantity(itemId: string, change: number) {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      }
    }
  }

  removeRow(itemId: string) {
    const index = this.cartItems.findIndex(i => i.id === itemId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    this.updateCartItemCount();
  }

  updateCartItemCount() {
    this.cartItemCount = this.cartItems.length;
  }

  trackById(index: number, item: any) {
    return item.id;
  }
  updatenotificationsItemCount() {
    this.notificationItemCount = this.notifications.length + this.notesNotifications.length + this.alerts.length;
  }


  notifications = [
    {
      id: 1,
      avatarType: 'image',
      avatar: './assets/images/faces/2.jpg',
      bgClass: '',
      initials: '',
      title: 'header.activity1Title',
      emoji: '🎉',
      message: 'header.activity1Message',
      time: 'header.twoMinutes'
    },
    {
      id: 2,
      avatarType: 'text',
      avatar: '',
      bgClass: 'bg-primary/10 !text-primary',
      initials: 'SM',
      title: 'header.activity2Title',
      emoji: '',
      message: 'header.activity2Message',
      time: 'header.fiveMinutes'
    },
    {
      id: 3,
      avatarType: 'image',
      avatar: './assets/images/faces/6.jpg',
      bgClass: '',
      initials: '',
      title: 'header.activity3Title',
      emoji: '🚀',
      message: 'header.activity3Message',
      time: 'header.yesterday'
    },
    {
      id: 4,
      avatarType: 'text',
      avatar: '',
      bgClass: 'bg-secondary-transparent',
      initials: 'TR',
      title: 'header.activity4Title',
      emoji: '',
      message: 'header.activity4Message',
      time: 'header.twoDays'
    },
    {
      id: 5,
      avatarType: 'image',
      avatar: './assets/images/faces/14.jpg',
      bgClass: '',
      initials: '',
      title: 'header.activity5Title',
      emoji: '🚚',
      message: 'header.activity5Message',
      time: 'header.oneHour'
    }
  ];
  notesNotifications = [
    {
      id: 1,
      bgClass: 'bg-primary',
      icon: 'ri-file-text-line',
      title: 'header.note1Title',
      message: 'header.note1Message',
      time: 'header.twoMinutes'
    },
    {
      id: 2,
      bgClass: 'bg-secondary',
      icon: 'ri-box-3-line',
      title: 'header.note2Title',
      message: 'header.note2Message',
      time: 'header.twoMinutes'
    },
    {
      id: 3,
      bgClass: 'bg-success',
      icon: 'ri-mail-open-line',
      title: 'header.note3Title',
      message: 'header.note3Message',
      time: 'header.tenDays'
    },
    {
      id: 4,
      bgClass: 'bg-info',
      icon: 'ri-bank-card-line',
      title: 'header.note4Title',
      message: 'header.note4Message',
      time: 'header.yesterday'
    },
    {
      id: 5,
      bgClass: 'bg-warning',
      icon: 'ri-group-line',
      title: 'header.note5Title',
      message: 'header.note5Message',
      time: 'header.twoDays'
    }
  ];
  alerts = [
    {
      id: 1,
      bgClass: 'bg-primary/10 !text-primary',
      icon: 'ri-mail-line',
      title: 'header.alert1Title',
      message: 'header.alert1Message',
      time: 'header.twoMinutes'
    },
    {
      id: 2,
      bgClass: 'bg-secondary/10 !text-secondary',
      icon: 'ri-folder-warning-line',
      title: 'header.alert2Title',
      message: 'header.alert2Message',
      time: 'header.fifteenMinutes'
    },
    {
      id: 3,
      bgClass: 'bg-success/10 !text-success',
      icon: 'ri-database-2-line',
      title: 'header.alert3Title',
      message: 'header.alert3Message',
      time: 'header.twentyThreeMinutes'
    },
    {
      id: 4,
      bgClass: 'bg-info/10 !text-info',
      icon: 'ri-bank-card-line',
      title: 'header.alert4Title',
      message: 'header.alert4Message',
      time: 'header.yesterday'
    },
    {
      id: 5,
      bgClass: 'bg-warning/10 !text-warning',
      icon: 'ri-stack-line',
      title: 'header.alert5Title',
      message: 'header.alert5Message',
      time: 'header.twoDays'
    }
  ];
  notificationItemCount = this.notifications.length + this.notesNotifications.length + this.alerts.length;
  removeNotification(id: number, type: string): void {
    if (type === 'notifications') {
      this.notifications = this.notifications.filter(notification => notification.id !== id);
    } else if (type === 'notesNotifications') {
      this.notesNotifications = this.notesNotifications.filter(notification => notification.id !== id);
    }
    else if (type === 'alerts') {
      this.alerts = this.alerts.filter(alert => alert.id !== id);
    }
    this.updatenotificationsItemCount();
  }





  private updateSelectedItem() {
    const dashboard = this.activatedRoute.snapshot.firstChild?.url[0]?.path;
    this.selectedItem = dashboard ? dashboard.charAt(0).toUpperCase() + dashboard.slice(1) + ' Dashboard' : this.selectedItem;
  }
  @HostListener('window:resize')
  onHeaderResize(): void {
    const html = this.doc.documentElement;
    if (localStorage.getItem('zynixverticalstyles') === 'icon-text-close') {
      html.setAttribute('data-toggled', 'icon-text-close');
    } else if (window.innerWidth <= 991) {
      html.setAttribute('data-toggled', 'open');
    } else if (localStorage.getItem('zynixverticalstyles') !== 'doublemenu') {
      html.removeAttribute('data-toggled');
    }
  }

  // Search
  // public menuItems!: Menu[];
  public items!: Menu[];
  public text!: string;
  public SearchResultEmpty: boolean = false;
  isDropdownVisible: boolean = false;
  Search(searchText: string): boolean {

    // Clear previous results
    this.menuItems = [];
    this.SearchResultEmpty = false;

    if (!searchText) return false;

    const items: Item[] = [];
    const normalizedText = searchText.toLowerCase().trim();

    (this.items ?? []).forEach((menuItem: Menu) => {
      // Check top-level menu item
      if (menuItem?.title && menuItem.type === 'link' &&
        this.translate.instant(menuItem.title).toLowerCase().includes(normalizedText)) {
        items.push(menuItem as Item);
      }

      // Check first-level children
      if (menuItem.children) {
        menuItem.children.forEach((subItem: Menu) => {
          if (subItem?.title && subItem.type === 'link' &&
            this.translate.instant(subItem.title).toLowerCase().includes(normalizedText)) {
            items.push(subItem as Item);
          }

          // Check second-level children
          if (subItem.children) {
            subItem.children.forEach((subSubItem: Menu) => {
              if (subSubItem?.title &&
                this.translate.instant(subSubItem.title).toLowerCase().includes(normalizedText)) {
                items.push(subSubItem as Item);
              }
            });
          }
        });
      }
    });

    this.menuItems = items;
    this.SearchResultEmpty = items.length === 0;

    return true;
  }


  //  Used to clear previous search result
  clearSearch() {
    const headerSearch =this.Selector('.header-search');
    if (headerSearch) {
      headerSearch.classList.remove('searchdrop');
    }
    this.text = '';
    this.menuItems = [];
    this.SearchResultEmpty = false;
    return this.text, this.menuItems;

  }
  isInputFocused: boolean = false;

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }


  isFullscreen: boolean = false;
  toggleFullscreen() {

    this.isFullscreen = !this.isFullscreen;
  }
}


