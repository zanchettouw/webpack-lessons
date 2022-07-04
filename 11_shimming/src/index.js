import print from './msg.js'


if (module.hot) {
  module.hot.accept('./msg.js', () => {
    console.log('msg atualizou')
    print()
  })
}

console.log(_.difference([1,2,3], [1,2,4,5]))
