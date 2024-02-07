import React from 'react';
import { expect } from '@wdio/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import EditableChip from './EditableChip';
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

describe('EditableChip Tests', () => {
    it('renders deletable chip', () => {
        render(<EditableChip />);
        const chip = screen.getByRole('button');
        expect(chip).toBeInTheDocument();
    });

    it('clicking delete makes the icon to not be displayed', async () => {
        render(<EditableChip />);

        const deleteIcon = screen.getByRole('button');
        await fireEvent.click(deleteIcon);

        expect(deleteIcon).not.toBeDisplayed();
    });
});
