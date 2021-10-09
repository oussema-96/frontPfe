import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      path: '/',
      title: 'General',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: true,
      type: '',
      submenus: []
    },
    {
      title: 'Personnes',
      icon: 'fa fa-users',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          path: '/personne',
          title: 'List',
        },
        {
          path: '/personne/add',
          title: 'Add'
        }
      ]
    },
    {
      title: 'Guests',
      icon: 'fas fa-user',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          path: '/guest',
          title: 'List',
        },
        {
          path: '/guest/add',
          title: 'Add'
        }
      ]
    },
    {
      title: 'Portes',
      icon: 'fas fa-door-open',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          path: '/porte',
          title: 'List',
        },
        {
          path: '/porte/add',
          title: 'Add'
        }
      ]
    },
    {
      title: 'Departments',
      icon: 'fas fa-building',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          path: '/department',
          title: 'List',
        },
        {
          path: '/department/add',
          title: 'Add'
        }
      ]
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}