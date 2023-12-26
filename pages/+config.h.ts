import type { Config } from 'vike/types'
import {Layout} from '../layouts/Layout'
import {Head} from '../layouts/Head'
import vikeReact from 'vike-react'

// Default configs (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "Gianni Vialetto",
  // <meta name="description">
  description: "",
  extends: vikeReact
} satisfies Config