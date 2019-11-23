import { projects } from './projects'
import { navbar } from './nav'
import { technologies } from './technologies.js'
import { person } from './person.js'
import '../css/index.css'
import '../css/uploader.css'

person()
technologies('technologies')

navbar()
projects('projects')


