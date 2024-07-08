export const contactService = {
  renderCards,
}

function renderCards() {
  const nums = createNums()
  const strHtml = nums
    .map(
      (num) => `
            <article 
                class="card">${num}
            </article>`
    )
    .join('')
  console.log(strHtml)

  return strHtml
}

function createNums() {
  const nums = []

  for (var i = 0; i < 20; i++) {
    nums.push(i % 10)
  }

  for (var i = 0; i < nums.length; i++) {
    const idx = getRandomInt(0, nums.length)

    const temp = nums[idx]
    nums[idx] = nums[i]
    nums[i] = temp
  }
  return nums
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
