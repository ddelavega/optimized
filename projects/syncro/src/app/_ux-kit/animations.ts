import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';


export const fadeAnimation =

  trigger('fadeAnimation', [

    transition('* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);
export const fadeAnimationSlide = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
]);

export const detailExpand =
  trigger('detailExpand', [
    state('collapsed', style({ height: '0px', minHeight: '0' })),
    state('expanded', style({ height: '*' })),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]);


export const routerAnimation = trigger('routerAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query('.router-animate', animateChild(), { optional: true }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-in-out', style({ opacity: 0 }))], { optional: true }),
      query(':enter', [animate('300ms ease-in-out', style({ opacity: 1 }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })

  ])
]);

export const filterAnimation = trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(':enter', [
      style({ opacity: 0, width: 0 }),
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 1, width: '*' })),
      ]),
    ], { optional: true })
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 0, width: 0 })),
      ]),
    ])
  ]),

]);


export const notificationAnim =
  trigger('notificationAnim', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(5px)'
      }),
      animate('150ms 125ms ease-out')
    ]),
    transition(':leave', [
      animate(125, style({
        opacity: 0,
        transform: 'scale(0.85)'
      }))
    ])
  ]);
export const slideInAnimation =
  trigger('slideInAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('300ms ease-out', style({ transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);

