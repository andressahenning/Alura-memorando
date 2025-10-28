import { animate, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF',
  })),
  state('highlighted', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', [
    animate('150ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
])

export const shownStateTrigger = trigger('showState', [
  /*state('shown', style({})),*/ // -> substituir por * (estado coringa)
  transition(':enter', [ //ao invés de void => *, usar :enter que é quando o elemente aparece no DOM
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [ //ao invés de * => void, usar :leave quando o elemento sai do DOM
    animate(300, style({
      opacity: 0
    }))
  ])
])

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('350ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])