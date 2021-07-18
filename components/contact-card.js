import styled from 'styled-components';

import { headingText } from '../mixins/';
import device from '../theme/device';
import { Container } from '.';

const ContactCardWrapper = styled.div`
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  --pad: ${({ theme }) => theme.padding};
  padding: calc(var(--pad) * 2) 0px;
  background: ${({ theme }) => theme.bg.secondary};
`;

const ContactCardContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const ContactCardItem = styled.div`
  width: 50%;
  padding: var(--pad);
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.bg.primary};

  @media ${device.laptop} {
    width: 100%;
  }
`;

const ContactCardItemForm = styled(ContactCardItem)`
  display: block;
  background: ${({ theme }) => theme.bg.primary};
  @media ${device.desktop} {
    margin: var(--pad);
    width: calc(100% - calc(var(--pad) * 2));
  }
`;

const ContactCardItemText = styled.div`
  h4 {
    ${headingText}
    font-size: 42px;
    font-weight: 700;
    color: ${({ theme }) => theme.text.light};
    @media ${device.laptop} {
      font-size: 28px;
    }
  }
`;

const ContactCardInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const ContactCardInputBox = styled.div`
  width: 50%;
  position: relative;
  padding: calc(var(--pad) / 3) calc(var(--pad) / 6);
`;

const ContactCardInputLabel = styled.div`
  top: 0px;
  font-size: 14px;
  color: #3f3c37;
  font-weight: 300;
  position: absolute;
  color: ${({ theme }) => theme.text.light};
  span {
    color: #bf0000;
  }
`;

const ContactCardInput = styled.input`
  appearance: none;
  color: #3f3c37;
  line-height: 2.3em;
  border: 1px solid #777777;
  border-radius: 6px;
  padding: 2px 0.3em;
  font-size: 14px;
  margin: 0 0 8pt;
  width: 100%;
`;

const ContactCardDisclaimer = styled.p`
  font-size: 10px;
  line-height: 1.3em;
  padding: 0px calc(var(--pad) / 6);
  strong {
    font-size: 10px;
    cursor: pointer;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactCardButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin: calc(var(--pad) / 6);
  border-radius: 120px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 44px;
  width: 150px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ContactCardCheckbox = styled.input`
  margin: 0px calc(var(--pad) / 6);
`;

export default function ContactCard({ img = '' }) {
  const input = ({ label, required = false, type = 'text', full = false }) => {
    return (
      <ContactCardInputBox style={full ? { width: '100%' } : {}}>
        <ContactCardInputLabel>
          {required && <span>*</span>} {label}
        </ContactCardInputLabel>

        <ContactCardInput
          type={type}
          style={full ? { paddingBottom: '40px' } : {}}></ContactCardInput>
      </ContactCardInputBox>
    );
  };
  return (
    <ContactCardWrapper
      style={img ? { backgroundImage: `url(${img})`, backgroundSize: 'cover' } : {}}>
      <ContactCardContainer>
        <ContactCardItem style={img ? { background: 'transparent' } : {}}>
          {!img && (
            <ContactCardItemText>
              <h4>Get more information.</h4>
              <h4>Get a project going.</h4>
              <h4>Get in touch.</h4>
            </ContactCardItemText>
          )}
        </ContactCardItem>
        <ContactCardItemForm>
          <ContactCardInputContainer>
            {input({ label: 'First Name:', required: true })}
            {input({ label: 'Surname:', required: true })}
          </ContactCardInputContainer>
          <ContactCardInputContainer>
            {input({ label: 'Company:', required: true })}
            {input({ label: 'Job Title:', required: true })}
          </ContactCardInputContainer>
          <ContactCardInputContainer>
            {input({ label: 'Work Email:', required: true })}
            {input({ label: 'Phone:', type: 'number' })}
          </ContactCardInputContainer>
          <ContactCardInputContainer>
            {input({ label: 'Country:', required: true, type: 'select' })}
            {input({ label: 'Industry:' })}
          </ContactCardInputContainer>
          <ContactCardInputContainer style={{ flexGrow: 1 }}>
            {input({ label: 'How can we help?', required: true, full: true })}
          </ContactCardInputContainer>
          <ContactCardDisclaimer>
            By checking this box and clicking submit, I hereby consent that Concentrix Tigerspike
            sends me via email marketing related information with regard to products and services of
            Concentrix Tigerspike. I understand that, in order to opt-out from receiving such emails
            in the future, I can use the opt-out mechanism that is described in each such email.
            <strong> Privacy Policy | GDPR</strong>
          </ContactCardDisclaimer>
          <ContactCardCheckbox type="checkbox" />
          <ContactCardButton>SUBMIT</ContactCardButton>
        </ContactCardItemForm>
      </ContactCardContainer>
    </ContactCardWrapper>
  );
}
