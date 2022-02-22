import React from 'react';
import { render } from '@testing-library/react';

import { Paragraph } from './paragraph.component';
import { ParagraphData } from './paragraph.data';

describe('Paragraph Component', () => {
    const { container } = render(<Paragraph {...ParagraphData} />);

    it('should match snapshot correctly', () => {
        expect(container.firstChild).toMatchSnapshot();
    });
});
