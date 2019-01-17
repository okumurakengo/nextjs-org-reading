import cowsay from 'cowsay-browser'

export default () => (
  <pre>
    {cowsay.say({ text: 'my body very smell by fish burger' })}
  </pre>
)
