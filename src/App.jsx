import {Button} from './components/ui/button.jsx'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card.jsx'

function App() {
  

  return (
    <>
      <Button>heLLO</Button>
      <div className='flex items-center justify-center'>
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Hello</CardTitle>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nesciunt voluptatem, omnis, sequi dolorum, saepe iusto optio illum voluptatibus neque quia animi sit tempore. Reiciendis ullam est culpa molestias aspernatur obcaecati, neque illo libero quam vel incidunt reprehenderit at voluptatibus.
        </CardContent>
        <CardFooter>End</CardFooter>
      </Card>
      </div>
      
    </>
  )
}

export default App
