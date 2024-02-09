import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import EditableChip from './EditableChip';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('EditableChip Tests', () => {
    it('renders chip with initial label', () => {
        const {getByText} = render(<EditableChip/>);
        const chipLabel = getByText('Romania');
        expect(chipLabel).toBeInTheDocument();
    });

    it('clicking on chip should show text field', () => {
        const {getByRole, getByTestId} = render(<EditableChip/>);
        const chip = getByRole('button', {name: 'Romania'});
        fireEvent.click(chip);
        const textField = getByTestId('chip-text');
        expect(textField).toBeInTheDocument();
    });

    it('changing text in text field should update label', () => {
        const {getByRole, getByDisplayValue} = render(<EditableChip/>);
        const chip = getByRole('button', {name: 'Romania'});
        fireEvent.click(chip);
        const textField = getByDisplayValue('Romania');
        fireEvent.change(textField, {target: {value: 'Italy'}});
        expect(textField).toHaveValue('Italy');
    });

    it('blurring text field should update chip label', () => {
        const {getByRole, getByDisplayValue, getByText} = render(
            <EditableChip/>);
        const chip = getByRole('button', {name: 'Romania'});
        fireEvent.click(chip);
        const textField = getByDisplayValue('Romania');
        fireEvent.change(textField, {target: {value: 'Italy'}});
        fireEvent.blur(textField);
        const updatedChipLabel = getByText('Italy');
        expect(updatedChipLabel).toBeInTheDocument();
    });

    it('deleting chip should hide both chip and text field', () => {
        const {getByRole, queryByRole, getByTestId} = render(<EditableChip/>);
        const chip = getByRole('button', {name: 'Romania'});
        fireEvent.click(chip);
        const deleteIcon = getByTestId('CancelIcon');
        fireEvent.click(deleteIcon);
        const deletedChip = queryByRole('button', {name: 'Romania'});
        expect(deletedChip).toBeNull();
    });
});