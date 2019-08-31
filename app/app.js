const writeBtn = document.querySelector('.write-btn')
const saveBtn = document.querySelector('.save-btn')
const text = document.querySelector('textarea')
const memos = getSavedMemos()

renderMemos(memos)

writeBtn.addEventListener('click', () => {
    controlPopUp()
})

saveBtn.addEventListener('click', () => {
    memos.push({
        content: text.value
    })
    saveMemos(memos)
    renderMemos(memos)
    text.value = ''
    controlPopUp()
})

