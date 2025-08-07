import { 
  trigger, 
  state, 
  style, 
  animate, 
  transition, 
  query, 
  stagger,
  keyframes
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('200ms ease-in', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('150ms ease-out', style({ opacity: 0 }))
  ])
]);

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({ 
      transform: 'translateY(20px)',
      opacity: 0 
    }),
    animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
      style({ 
        transform: 'translateY(0)',
        opacity: 1 
      })
    )
  ])
]);

export const formFieldAppear = trigger('formFieldAppear', [
  transition(':enter', [
    query('.mat-form-field', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      stagger('50ms', [
        animate('300ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ], { optional: true })
  ])
]);

export const buttonHover = trigger('buttonHover', [
  state('default', style({
    transform: 'scale(1)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  })),
  state('hover', style({
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
  })),
  transition('default <=> hover', animate('200ms ease-in-out'))
]);

export const shake = trigger('shake', [
  transition('* => *', [
    animate('0.5s ease-in-out', keyframes([
      style({ transform: 'translateX(0)', offset: 0 }),
      style({ transform: 'translateX(-10px)', offset: 0.2 }),
      style({ transform: 'translateX(10px)', offset: 0.4 }),
      style({ transform: 'translateX(-10px)', offset: 0.6 }),
      style({ transform: 'translateX(10px)', offset: 0.8 }),
      style({ transform: 'translateX(0)', offset: 1 })
    ]))
  ])
]);
