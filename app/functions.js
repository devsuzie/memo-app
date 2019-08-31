const getSavedMemos = () => {
  const memosJSON = localStorage.getItem('memos')

  try {
    return memosJSON ? JSON.parse(memosJSON) : []
  } catch(e) {
    return []
  }
}

const saveMemos = (memos) => {
  localStorage.setItem('memos', JSON.stringify(memos))
}

const renderMemos = (memos) => {
  document.querySelector('ul').innerHTML = ''
  memos.forEach((memo) => document.querySelector('ul').appendChild(generateMemoDom(memo)))
}

const generateMemoDom = (memo) => {
  const memoLi = document.createElement('li')
  memoLi.innerHTML = memo.content
  return memoLi
}

const controlPopUp = () => {
  const popUp = document.querySelector('section')
  if (popUp.classList.contains('on')) {
    popUp.classList.remove('on')
  } else {
    popUp.classList.add('on')
  }
}
