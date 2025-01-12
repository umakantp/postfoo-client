import * as React from 'react'

// Same as HoneypotInputProps in postfoo-server/src/utils/honeypot.ts
export interface HpInputProps {
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

type HpContextType = Partial<HpInputProps>

const HoneypotContext = React.createContext<HpContextType>({})

interface HpInputsProps {
  label: string,
}

export const HpInputs: React.FC<HpInputsProps> = ({ label = 'Please leave this field blank'}) => {
  let context = React.useContext(HoneypotContext)
  let {
    nameFieldName = 'name__confirm',
    validFromFieldName = 'from__confirm',
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

export type HpProviderProps = HpContextType & {
  children: React.ReactNode,
}

export const HpProvider: React.FC<HpProviderProps> = ({ children, ...context }) => {
  return (
    <HoneypotContext.Provider value={context}>
      {children}
    </HoneypotContext.Provider>
  )
}

export const fetchHpInputs = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gethp`)
  try {
    const data = await response.json()
    return data.hp
  } catch {
    return {}
  }
}
