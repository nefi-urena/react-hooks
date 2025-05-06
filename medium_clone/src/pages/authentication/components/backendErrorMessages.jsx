const BackendErrorMessages = ({backendErrors}) => {
  const errorMessages = Object.keys(backendErrors).map((name) => {
    const messages = backendErrors[name].join(' ')
    return `${messages}`
  })
  return (
    <ul className="error-messages">
      {errorMessages.map((errorMessage) => {
        return <li key={errorMessage}>{errorMessage}</li>
      })}
    </ul>
  )
}

export default BackendErrorMessages
