/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

function _isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && _isBlob(arg);
}

/* generated type guards */

export function isApiResponse(arg: any): arg is models.ApiResponse {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // code?: number
    ( typeof arg.code === 'undefined' || typeof arg.code === 'number' ) &&
    // message?: string
    ( typeof arg.message === 'undefined' || typeof arg.message === 'string' ) &&
    // type?: string
    ( typeof arg.type === 'undefined' || typeof arg.type === 'string' ) &&

  true
  );
  }

export function isCategory(arg: any): arg is models.Category {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

  true
  );
  }

export function isOrder(arg: any): arg is models.Order {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // complete?: boolean
    ( typeof arg.complete === 'undefined' || typeof arg.complete === 'boolean' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // petId?: number
    ( typeof arg.petId === 'undefined' || typeof arg.petId === 'number' ) &&
    // quantity?: number
    ( typeof arg.quantity === 'undefined' || typeof arg.quantity === 'number' ) &&
    // shipDate?: string
    ( typeof arg.shipDate === 'undefined' || typeof arg.shipDate === 'string' ) &&
    // status?: 'placed' | 'approved' | 'delivered'
    ( typeof arg.status === 'undefined' || ['placed', 'approved', 'delivered'].includes(arg.status) ) &&

  true
  );
  }

export function isPet(arg: any): arg is models.Pet {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // category?: Category
    ( typeof arg.category === 'undefined' || isCategory(arg.category) ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name: string
    ( typeof arg.name === 'string' ) &&
    // photoUrls: string[]
    ( (Array.isArray(arg.photoUrls) && arg.photoUrls.every((item: unknown) => typeof item === 'string')) ) &&
    // status?: 'available' | 'pending' | 'sold'
    ( typeof arg.status === 'undefined' || ['available', 'pending', 'sold'].includes(arg.status) ) &&
    // tags?: Tag[]
    ( typeof arg.tags === 'undefined' || (Array.isArray(arg.tags) && arg.tags.every((item: unknown) => isTag(item))) ) &&

  true
  );
  }

export function isTag(arg: any): arg is models.Tag {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&

  true
  );
  }

export function isUser(arg: any): arg is models.User {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // firstName?: string
    ( typeof arg.firstName === 'undefined' || typeof arg.firstName === 'string' ) &&
    // id?: number
    ( typeof arg.id === 'undefined' || typeof arg.id === 'number' ) &&
    // lastName?: string
    ( typeof arg.lastName === 'undefined' || typeof arg.lastName === 'string' ) &&
    // password?: string
    ( typeof arg.password === 'undefined' || typeof arg.password === 'string' ) &&
    // phone?: string
    ( typeof arg.phone === 'undefined' || typeof arg.phone === 'string' ) &&
    // username?: string
    ( typeof arg.username === 'undefined' || typeof arg.username === 'string' ) &&
    // userStatus?: number
    ( typeof arg.userStatus === 'undefined' || typeof arg.userStatus === 'number' ) &&

  true
  );
  }


