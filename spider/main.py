
from selenium import webdriver
import time
import json

def init():
    dr = webdriver.Chrome()
    dr.maximize_window()
    return dr

def save_to_file(file_name, json_data):
    with open(file_name, 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=4)

def get_common_list():
    news_list = dr.find_elements_by_css_selector('.item')
    ret = []
    for item in news_list:
        try:
            temp = {
                'id': item.get_attribute('group_id'),
                'news_title': item.find_element_by_css_selector(".title").text,
                'media_avatar': item.find_element_by_css_selector(".media-avatar img").get_attribute('src'),
                'source': item.find_element_by_css_selector(".source").text,
                'comment': item.find_element_by_css_selector(".comment").text,
                'pub_time': item.find_element_by_css_selector("span.lbtn").text
            }
            preview_img = ''
            try:
                preview_img = item.find_element_by_css_selector(".img-wrap img").get_attribute('src')
            except:
                preview_img = ''
            finally:
                temp['preview_img'] = preview_img            
            ret.append(temp)
        except:
            pass
    return ret

def switch_page(page):
    dr.find_element_by_css_selector('div[ga_event="left-channel-click"]').find_element_by_link_text(page).click()

def run():
    try:
        dr.get(url)
        for page in pages:
            switch_page(page)
            time.sleep(3)
            news_list = get_common_list()
            save_to_file('./output/' + page + '.json', news_list)
    finally:
        time.sleep(3)
        dr.close()

if __name__ == '__main__':
    pages = ['热点', '科技', '游戏', '搞笑']
    url = 'https://www.toutiao.com/'
    dr = init()
    run()