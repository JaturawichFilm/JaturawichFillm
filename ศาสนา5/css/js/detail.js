document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('event'); // Get the 'event' parameter from URL

    // --- Event Data (You can expand this with more events) ---
    const eventData = {
        'makha': {
            title: 'วันมาฆบูชา',
            date: '24 กุมภาพันธ์ 2567',
            image: 'w1.png',
            description: 'วันมาฆบูชา เป็นวันสำคัญทางพระพุทธศาสนา ที่มีเหตุการณ์สำคัญเกิดขึ้นคือ พระภิกษุ 1,250 รูป มาประชุมพร้อมกันโดยมิได้นัดหมาย ณ เวฬุวันมหาวิหาร ในกรุงราชคฤห์ เพื่อรับฟังโอวาทจากพระพุทธเจ้า ซึ่งประกอบด้วยหลักการสำคัญ 3 ประการคือ การไม่ทำความชั่วทั้งปวง การทำความดีให้ถึงพร้อม และการทำจิตใจให้บริสุทธิ์ผ่องใส',
            history: 'ย้อนรอยวันมาฆบูชา: เหตุการณ์สำคัญในวันมาฆบูชาเกิดขึ้นในสมัยพุทธกาล คือเป็นวันที่พระพุทธเจ้าทรงแสดง "โอวาทปาฏิโมกข์" ซึ่งเป็นหลักการสำคัญของการเผยแผ่พระพุทธศาสนา โดยมีพระสงฆ์จำนวน 1,250 รูป ซึ่งเป็นเอหิภิกขุอุปสัมปทา (พระภิกษุที่พระพุทธเจ้าบวชให้ด้วยพระองค์เอง) มาประชุมกันโดยมิได้นัดหมาย ซึ่งเป็นเหตุอัศจรรย์สี่ประการที่เรียกว่า "จาตุรงคสันนิบาต" นอกจากนี้ยังตรงกับวันเพ็ญเดือนสาม (มาฆะ) อีกด้วย',
            significance: 'ความสำคัญของวันมาฆบูชาคือ เป็นวันแห่งการประกาศหลักธรรมสำคัญของพระพุทธศาสนา คือ โอวาทปาฏิโมกข์ ซึ่งเป็นหัวใจของพระพุทธศาสนา เป็นวันที่พุทธศาสนิกชนจะได้รำลึกถึงพระคุณของพระพุทธเจ้า และปฏิบัติตนตามหลักคำสอนเพื่อความสงบสุขของชีวิต',
            practices: [
                'ทำบุญตักบาตรในตอนเช้า',
                'เข้าวัดฟังพระธรรมเทศนา',
                'บำเพ็ญกุศลด้วยการเวียนเทียนรอบพระอุโบสถในตอนค่ำ',
                'งดเว้นการทำบาปทั้งปวง',
                'ทำจิตใจให้ผ่องใส บริสุทธิ์'
            ]
        },
        'visakha': {
            title: 'วันวิสาขบูชา',
            date: '22 พฤษภาคม 2567',
            image: 'images/visakha-bucha-large.webp',
            description: 'วันวิสาขบูชา คือวันที่สมเด็จพระสัมมาสัมพุทธเจ้า ประสูติ ตรัสรู้ และปรินิพพาน ซึ่งทั้งสามเหตุการณ์สำคัญนี้ได้เกิดขึ้นในวันเดียวกัน คือ วันเพ็ญขึ้น 15 ค่ำ เดือน 6',
            history: 'พุทธประวัติในวันวิสาขบูชา: วันวิสาขบูชาเป็นวันคล้ายวันประสูติ ตรัสรู้ และปรินิพพานของพระพุทธเจ้า โดยเหตุการณ์เหล่านี้เกิดขึ้นในที่ต่างกันและต่างเวลากัน แต่กลับมาบรรจบกันในวันเพ็ญเดือนวิสาขะ ซึ่งเป็นเรื่องอัศจรรย์ยิ่ง',
            significance: 'ความสำคัญอันสูงสุดของวันวิสาขบูชาคือ เป็นวันที่ชาวพุทธทั่วโลกได้ร่วมกันรำลึกถึงคุณอันยิ่งใหญ่ของพระพุทธเจ้า ผู้ทรงค้นพบและเผยแผ่พระธรรมอันนำไปสู่การพ้นทุกข์',
            practices: [
                'ทำบุญตักบาตร',
                'ฟังพระธรรมเทศนา',
                'เวียนเทียนรอบพระอุโบสถ',
                'รักษาศีล 5 หรือศีล 8',
                'บำเพ็ญภาวนา'
            ]
        },
        'asarnha': {
            title: 'วันอาสาฬหบูชา',
            date: '20 กรกฎาคม 2567',
            image: 'images/asarnha-bucha-large.webp',
            description: 'วันอาสาฬหบูชา เป็นวันที่พระพุทธเจ้าทรงแสดงปฐมเทศนา คือ ธัมมจักกัปปวัตตนสูตร แก่ปัญจวัคคีย์ ถือเป็นการบังเกิดขึ้นของพระรัตนตรัยครบองค์สาม คือ พระพุทธ พระธรรม และพระสงฆ์',
            history: 'เรื่องราวการแสดงธรรมครั้งแรก: หลังตรัสรู้ พระพุทธเจ้าทรงแสดงธรรมโปรดปัญจวัคคีย์เป็นครั้งแรก ทำให้พระอัญญาโกณฑัญญะบรรลุธรรมและขออุปสมบท ถือเป็นพระสงฆ์รูปแรกในพระพุทธศาสนา',
            significance: 'วันแห่งการเริ่มต้นพระธรรมและพระสงฆ์ เป็นวันสำคัญที่พุทธศาสนิกชนรำลึกถึงจุดเริ่มต้นของการเผยแผ่พระพุทธศาสนาอย่างเป็นทางการ',
            practices: [
                'ทำบุญตักบาตร',
                'ฟังพระธรรมเทศนา',
                'เวียนเทียนในตอนค่ำ',
                'ระลึกถึงพระรัตนตรัย'
            ]
        },
        'loykratong': {
            title: 'วันลอยกระทง',
            date: '15 พฤศจิกายน 2567',
            image: 'images/loykratong-large.webp',
            description: 'วันลอยกระทงเป็นเทศกาลเก่าแก่ของไทยที่จัดขึ้นในคืนวันเพ็ญเดือนสิบสอง (ประมาณเดือนพฤศจิกายน) เพื่อเป็นการขอขมาพระแม่คงคา บูชาพระพุทธเจ้า หรือลอยเคราะห์สิ่งไม่ดีออกไป',
            history: 'ประเพณีลอยกระทงมีมาตั้งแต่สมัยสุโขทัย เชื่อกันว่าเป็นการบูชารอยพระพุทธบาท หรือเพื่อเป็นการขอขมาพระแม่คงคาที่มนุษย์ได้ใช้น้ำและทิ้งสิ่งปฏิกูลลงไป บางตำนานก็กล่าวว่าเป็นการลอยทุกข์โศกโรคภัยให้ลอยไปกับกระทง',
            significance: 'วันลอยกระทงเป็นเทศกาลที่สะท้อนถึงวัฒนธรรมและประเพณีอันงดงามของไทย แสดงออกถึงความผูกพันกับสายน้ำและความเคารพต่อธรรมชาติ และยังเป็นโอกาสให้คนในครอบครัวและชุมชนได้มารวมตัวกันทำกิจกรรมร่วมกัน',
            practices: [
                'ประดิษฐ์และตกแต่งกระทงอย่างสวยงาม',
                'นำกระทงไปลอยในแม่น้ำ ลำคลอง หรือแหล่งน้ำต่างๆ',
                'ขอขมาพระแม่คงคา',
                'ร่วมกิจกรรมบันเทิงต่างๆ เช่น การประกวดนางนพมาศ การแสดงแสงสีเสียง'
            ]
        },
        'christmas': {
            title: 'วันคริสต์มาส',
            date: '25 ธันวาคม 2567',
            image: 'images/christmas-large.webp',
            description: 'วันคริสต์มาสเป็นวันสำคัญทางศาสนาคริสต์ที่เฉลิมฉลองการประสูติของพระเยซูคริสต์ ซึ่งเป็นศาสดาของศาสนาคริสต์ และยังเป็นเทศกาลแห่งความสุข การให้ และการรวมญาติ',
            history: 'แม้ว่าวันประสูติที่แท้จริงของพระเยซูจะไม่มีบันทึกไว้แน่ชัด แต่คริสตจักรได้กำหนดให้วันที่ 25 ธันวาคม เป็นวันเฉลิมฉลองคริสต์มาสมาตั้งแต่ศตวรรษที่ 4 ซึ่งเป็นช่วงเวลาที่สอดคล้องกับเทศกาลฤดูหนาวในยุโรปที่เคยมีมาก่อน',
            significance: 'คริสต์มาสมีความสำคัญอย่างยิ่งสำหรับชาวคริสต์ เพราะเป็นวันที่ระลึกถึงการเสด็จมาบังเกิดของพระเยซู ซึ่งเชื่อกันว่าเป็นพระผู้ช่วยให้รอดของมนุษยชาติ นอกจากนี้ยังเป็นเทศกาลแห่งความรัก การให้อภัย และการแบ่งปันความสุข',
            practices: [
                'เข้าร่วมพิธีมิสซาในโบสถ์',
                'ประดับตกแต่งต้นคริสต์มาสและบ้านเรือน',
                'แลกเปลี่ยนของขวัญกับครอบครัวและเพื่อนฝูง',
                'รับประทานอาหารร่วมกันในครอบครัว',
                'ร้องเพลงคริสต์มาสและกิจกรรมเฉลิมฉลองต่างๆ'
            ]
        }
    };

    const titleElement = document.getElementById('event-title');
    const dateElement = document.getElementById('event-date-detail');
    const imageElement = document.getElementById('event-image-detail');
    const descriptionElement = document.getElementById('event-description');
    const historyElement = document.querySelector('#event-history p');
    const significanceElement = document.querySelector('#event-significance p');
    const practicesList = document.querySelector('#event-practices .practice-list');
    const metaTitleElement = document.getElementById('event-title-meta'); // For browser tab title

    if (eventId && eventData[eventId]) {
        const data = eventData[eventId];
        
        // Update Meta Title for browser tab
        metaTitleElement.textContent = `${data.title} - วันสำคัญทางศาสนา`;

        // Update content on page
        titleElement.textContent = data.title;
        dateElement.textContent = data.date;
        
        // Update image using <picture> for WebP support
        const pictureElement = imageElement.closest('picture');
        if (pictureElement) {
            pictureElement.querySelector('source').srcset = data.image;
            imageElement.src = data.image.replace('.webp', '.jpg'); // Fallback JPG
            imageElement.alt = `รูปภาพ ${data.title}`;
        } else {
             imageElement.src = data.image;
             imageElement.alt = `รูปภาพ ${data.title}`;
        }
       
        descriptionElement.textContent = data.description;
        historyElement.textContent = data.history;
        significanceElement.textContent = data.significance;

        // Clear existing practices and add new ones
        practicesList.innerHTML = '';
        data.practices.forEach(practice => {
            const listItem = document.createElement('li');
            listItem.textContent = practice;
            practicesList.appendChild(listItem);
        });

    } else {
        // Handle case where eventId is not found (e.g., show an error message)
        const detailContainer = document.querySelector('.detail-container');
        detailContainer.innerHTML = '<p class="error-message">ขออภัยค่ะ ไม่พบข้อมูลสำหรับวันสำคัญนี้</p>';
        detailContainer.style.textAlign = 'center';
        detailContainer.style.padding = '80px 20px';
        detailContainer.style.boxShadow = 'none';
        detailContainer.style.backgroundColor = 'transparent';
    }
});