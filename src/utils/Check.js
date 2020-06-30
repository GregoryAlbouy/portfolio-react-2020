const Check = {
  areEqualArrays(a, b) {
    return (
      Array.isArray(a) && Array.isArray(b)
      && a.length === b.length
      && a.reduce((acc, curr) => acc && b.includes(curr), true)
    )
  }
}

export default Check;