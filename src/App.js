import './App.css';
import { AllIcons } from './components/AllICons';
import AudioPlayer from './components/AudioPlayer';
import { ExampleComponent } from './components/AudioVoiceRecorder';
// import BarCode from './components/BarCode';
import CountrySelector from './components/CountrySelect';
import { MyComponent } from './components/CustomSelect';
import FlagsSelect from './components/FlagsSelect';
import Gallery from './components/Gallery';
import Demo from './components/GeoLoaction';
import GoogleDrive from './components/GoogleDrive';
import GoogleTranslate from './components/GoogleLanguage';
import SimpleMap from './components/GoogleMap';
import MyGallery from './components/ImageGalary';
import LanguageSelect from './components/LanguageSelect';
import { MultiLangual } from './components/MultiLangualPackage';
import Paypal from './components/PayPal';
import Slider from './components/Slideer';
import { TimeZone } from './components/TimeZoneSelect';
import VideoPlayer from './components/VideoPlayer';


function App() {
  return (
    <div className="App">
    <AllIcons/>
    <Gallery/>
    <GoogleDrive/>
    <MultiLangual/>
<CountrySelector/>
    <GoogleTranslate/>
<TimeZone/>
<LanguageSelect/>
<SimpleMap/>
<MyComponent/>
<Demo/>
<FlagsSelect/>
{/* <BarCode/> */}
<VideoPlayer/>
<ExampleComponent/>
<AudioPlayer/>
<Slider/>
<MyGallery/>
<Paypal/>
    </div>
  );
}

export default App;
