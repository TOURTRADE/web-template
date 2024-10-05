import React from 'react';
import {
    PrimaryButton
} from '../../components';

const standaloneOnramp = window.StripeOnramp.Standalone({
    source_currency: 'usd',
    destination_currency: 'sol',
    destination_network: 'solana',
  });
const redirectUrl = standaloneOnramp.getUrl();
  
export const StripeOnRampButton = (
    <PrimaryButton onClick={() => window.open(redirectUrl, '_blank')}  >
        Buy Solana
    </PrimaryButton>
);

export default StripeOnRampButton;
