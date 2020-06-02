import React, { Component, useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import style from './style.module.css';

const SortableItem = SortableElement(({ value }) => (
    <div className={style.test}>{value}</div>
));

const SortableList = SortableContainer(({ items }) => {
    return (
        <ul className={style.listeItems}>
            {items.map((value, index) => (
                <SortableItem
                    key={`item-${value}${index}`}
                    index={index}
                    value={value}
                />
            ))}
        </ul>
    );
});

export function SortableComponent({ items, onSortEnd }) {
    return <SortableList items={items} onSortEnd={onSortEnd} axis="x" />;
}
