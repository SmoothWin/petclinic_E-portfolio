import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const angularCode = hljs.highlightAuto('this.show = ($event,vetID) => {\n'+
                '\tconsole.log(vetID);\n'+
                    '\tlet child = document.getElementsByClassName("m"+vetID)[0];\n'+
                    '\tlet left = $event.pageX;\n'+
                      '\tlet top = $event.pageY;\n'+
                      '\tif(document.documentElement.clientWidth > 960){\n'+
                        '\t\tchild.style.left = (left + 390) + "px";\n'+
                      '\t}\n'+
                      '\telse{\n'+
                        '\t\tchild.style.left = (left + 200) + "px";\n'+
                      '\t}\n'+
                      '\tchild.style.top = (top+80) + "px";\n'+
                   '\tchild.classList.remove("modalOff");\n'+
                   '\tchild.classList.add("modalOn");\n'+
    
            '}\n\n\n'+
            'this.hide = ($event,vetID) => {\n'+
    
                                '\tlet child = document.getElementsByClassName("m"+vetID)[0];\n'+
                                '\tchild.classList.remove("modalOn");\n'+
                                '\tchild.classList.add("modalOff");\n'+
            '}\n').value;

const javaCode = hljs.highlight('package com.petclinic.vets.presentationlayer;\n'+

'import io.github.bonigarcia.seljup.SeleniumExtension;\n'+
'import org.apache.commons.io.FileUtils;\n'+
'import org.aspectj.util.FileUtil;\n'+
'import org.junit.jupiter.api.*;\n'+
'import org.junit.jupiter.api.extension.ExtendWith;\n'+
'import org.openqa.selenium.*;\n'+
'import org.openqa.selenium.chrome.ChromeDriver;\n'+
'import org.openqa.selenium.interactions.Actions;\n'+
'import org.openqa.selenium.remote.CapabilityType;\n'+
'import org.openqa.selenium.remote.DesiredCapabilities;\n'+
'import org.springframework.boot.web.server.LocalServerPort;\n'+
'import org.springframework.test.context.event.annotation.AfterTestMethod;\n\n'+

'import java.io.File;\n'+
'import java.util.concurrent.TimeUnit;\n\n'+

'import static org.hamcrest.MatcherAssert.assertThat;\n'+
'import static org.hamcrest.Matchers.is;\n\n'+

'@ExtendWith(SeleniumExtension.class)\n'+
'public class VetSeleniumUITest {\n'+
    '\t@LocalServerPort\n'+
    '\tint randomServerPort;\n\n'+

    '\tChromeDriver driver;\n'+
    '\tprivate final String SCREENSHOTS = "./src/test/screenshots/";\n\n'+

    '\tpublic VetSeleniumUITest(ChromeDriver driver){\n'+
        '\t\tthis.driver = driver;\n\n'+

        '\t\tDesiredCapabilities dc = new DesiredCapabilities();\n'+
        '\t\tdc.setCapability(CapabilityType.UNEXPECTED_ALERT_BEHAVIOUR, UnexpectedAlertBehaviour.IGNORE);\n'+
        '\t\tSystem.setProperty("sel.jup.screenshot.at.the.end.of.tests","whenfailure");\n'+
        '\t\tSystem.setProperty("sel.jup.screenshot.format", "png");\n'+
        '\t\tSystem.setProperty("sel.jup.output.folder","./src/test/failureScreenshots/");\n'+
    '}\n\n'+

    '\tpublic static void takeSnapShot(WebDriver webDriver, String fileWithPath) throws Exception{\n\n'+

        '\t\t//Convert web driver object to TakeScreenshot\n'+
        '\t\tTakesScreenshot scrShot = ((TakesScreenshot) webDriver);\n'+
        '\t\t//call get Screenshot method to create actual image file\n'+
        '\t\tFile SrcFile = scrShot.getScreenshotAs(OutputType.FILE);\n'+
        '\t\t//Move image file to new destination\n'+
        '\t\tFile DestFile = new File(fileWithPath);\n'+
        '\t\t//Copy file at destination\n'+
        '\t\tFileUtils.copyFile(SrcFile,DestFile);\n'+
    '\t}\n\n'+

    '\t@BeforeEach'+
    '\tpublic void setup() throws InterruptedException {\n'+
        '\t\tdriver.get("http://localhost:8080/#!/vets");\n'+
        '\t\tdriver.manage().window().maximize();\n\n'+

        '\t\tdriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);\n'+
    '\t}\n\n'+

    '\t@AfterTestMethod\n'+
    '\tpublic void screenShot() throws Exception{\n'+
        '\t\tdriver.quit();\n'+
    '\t}\n\n'+

    '\t@Test\n'+
    '\t@DisplayName("Test_Vet_Modal_Information_Presence")\n'+
    '\tpublic void testModalAppear(TestInfo testInfo) throws Exception{\n'+
        '\t\tString method = testInfo.getDisplayName();\n'+
        '\t\tboolean error = false;\n'+
        '\t\ttry {\n'+
            '\t\t\tActions actions = new Actions(driver);\n'+
            '\t\t\tWebElement info = driver.findElement(By.className("info"));\n'+
            '\t\t\tactions.moveToElement(info);\n'+
            '\t\t\tactions.click().build().perform();\n'+
            '\t\t\tThread.sleep(1000);\n'+
            '\t\t\tWebElement modal = driver.findElement(By.className("modalOn"));\n'+
            '\t\t\tassertThat(modal.isDisplayed(), is(true));\n'+
        '\t\t}catch (AssertionError e){\n'+
            '\t\t\te.printStackTrace();\n'+
            '\t\t\terror = true;\n'+
            '\t\t\tthrow new AssertionError(e);\n'+
        '\t\t}\n'+
        '\t\tcatch (InterruptedException e){\n'+
            '\t\t\te.printStackTrace();\n'+
        '\t\t}\n'+
        '\t\tfinally {\n'+
            '\t\t\tif(error == false) {\n'+
                '\t\t\t\ttakeSnapShot(driver, SCREENSHOTS + "/pass/" + method + "_" + System.currentTimeMillis() + ".png");\n'+
            '\t\t\t}\n'+
            '\t\t\telse{\n'+
                '\t\t\t\ttakeSnapShot(driver, SCREENSHOTS+"/fail/"+method+"_"+System.currentTimeMillis()+".png");\n'+
            '\t\t\t}\n'+
        '\t\t}\n'+
    '\t}\n'+
'}\n', {language: 'java'}).value;


export default function preview(props){
    function createMarkup(code) {
        return {
           __html: code    };
     }; 
     if(props.codeSet == "angular"){
        return <div className="code"><pre><code dangerouslySetInnerHTML={createMarkup(angularCode)}></code></pre></div>
     }else{
        return <div className="code"><pre><code dangerouslySetInnerHTML={createMarkup(javaCode)}></code></pre></div>
     }
    
}