import {
  CounterApp, TodoList, Calculator, ColorPicker,
  DigitalClock, QuoteGenerator, ToggleComponent,
  FormValidation, ImageGallery, RecipeApp, ExpenseTracker,
  Accordion, TabsUI, StarRating, ProductModalApp,
  SearchFilterApp, Stopwatch, MultiStepForm, MovieBrowser
} from './Projects';

import { WeatherApp } from './weatherapp';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Beginner React Projects</h1>

      <CounterApp />
      <hr />
      <TodoList />
      <hr />
      <Calculator />
      <hr />
      <ColorPicker />
      <hr />
      <DigitalClock />
      <hr />
      <QuoteGenerator />
      <hr />
      <ToggleComponent />
      <hr />
      <FormValidation />
      <hr />
      <WeatherApp />
      <hr />
      <ImageGallery />
      <hr />
      <RecipeApp />
      <hr />
      <ExpenseTracker />
      <hr />
      <Accordion />
      <hr />
      <TabsUI />
      <hr />
      <StarRating />
      <hr />
      <ProductModalApp />
      <hr />
      <SearchFilterApp />
      <hr />
      <Stopwatch />
      <hr />
      <MultiStepForm />
      <hr />
      <MovieBrowser />

    </div>
  );
}

export default App;
