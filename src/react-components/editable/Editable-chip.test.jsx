import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditableChip from './EditableChip';

test('renders two deletable chips', () => {
    const { getAllByRole } = render(<EditableChip />);
    const chips = getAllByRole('button');
    expect(chips).toHaveLength(2);
});

test('clicking delete icon triggers handleDelete', () => {
    const { getAllByRole } = render(<EditableChip />);
    const deleteIcons = getAllByRole('button', { name: /delete/ });
    deleteIcons.forEach(icon => {
        fireEvent.click(icon);
    });
    expect(console.info).toHaveBeenCalledWith('You clicked the delete icon.');
});
