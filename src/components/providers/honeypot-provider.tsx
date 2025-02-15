import * as React from 'react'
import { HONEYPOT_DEFAULT_NAME_FIELD_NAME, HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME } from 'src/utils/constants'

// Same as HoneypotInputProps in postfoo-server:src/utils/honeypot.ts
export interface HoneypotInputProps {
  /**
	 * The name expected to be used by the honeypot input field.
	 */
  nameFieldName: string,
  /**
	 * The name expected to be used by the honeypot valid from input field.
	 */
  validFromFieldName: string | null,
  /**
	 * The encrypted value of the current timestamp.
	 */
  encryptedValidFrom: string,
}

type HoneypotContextType = Partial<HoneypotInputProps>

const HoneypotContext = React.createContext<HoneypotContextType>({})

interface HoneypotInputsProps {
  label?: string,
}

export const useHoneypot = () => {
  return React.useContext(HoneypotContext)
}

export const HoneypotInputs: React.FC<HoneypotInputsProps> = ({ label = 'Please leave this field blank'}) => {
  const context = React.useContext(HoneypotContext)
  const {
    nameFieldName = HONEYPOT_DEFAULT_NAME_FIELD_NAME,
    validFromFieldName = HONEYPOT_DEFAULT_VALID_FROM_FIELD_NAME,
    encryptedValidFrom,
  } = context

  return (
    <div id={`${nameFieldName}_wrap`} style={{ display: 'none' }} aria-hidden="true">
      <label htmlFor={nameFieldName}>{label}</label>
      <input id={nameFieldName} name={nameFieldName} type="text" defaultValue="" autoComplete="nope" tabIndex={-1} />
      {validFromFieldName && encryptedValidFrom ? (
        <>
          <label htmlFor={validFromFieldName}>{label}</label>
          <input
            id={validFromFieldName}
            name={validFromFieldName}
            type="text"
            value={encryptedValidFrom}
            readOnly
            autoComplete="off"
            tabIndex={-1}
          />
        </>
      ) : null}
    </div>
  )
}

export type HoneypotProviderProps = HoneypotContextType & {
  children: React.ReactNode,
}

export const HoneypotProvider: React.FC<HoneypotProviderProps> = ({ children, ...context }) => {
  return (
    <HoneypotContext.Provider value={context}>
      {children}
    </HoneypotContext.Provider>
  )
}
