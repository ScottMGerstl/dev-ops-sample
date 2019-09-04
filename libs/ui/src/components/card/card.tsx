import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'hive-ui-card',
    styleUrl: 'card.scss',
    shadow: true
})
export class Card {
    render() {
        return (
            <slot></slot>
        );
    }
}
