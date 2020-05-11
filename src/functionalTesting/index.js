export { render, waitFor as wait } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

// Simulate a press by touching the node
fireEvent.press = node => {
  fireEvent.touchStart(node);
  fireEvent.touchEnd(node);
};

export { fireEvent };
