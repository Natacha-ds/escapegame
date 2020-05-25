import React, { useState } from 'react';
import './index.module.css';

export function NextButton({ text }) {
    return <button className="next"> {text}</button>;
}
