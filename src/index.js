import sum from './calc'
import Heading from './_components/heading/index'

console.log('Testing Webpack')

const heading = new Heading()

heading.create('New Title from Webpack')
heading.create('Hot Reload')

sum(2, 4)
sum(4, 8)