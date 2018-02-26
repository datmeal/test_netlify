---
templateKey: contact-page
path: /contact/
title: お問い合わせ
---

弊社にご関心をお持ちいただきまして、ありがとうございます。ご意見・ご相談、料金のお見積もりなど、お気軽にお問合わせください。お問合せ内容の確認後、担当者よりご連絡させていただきます。

<form name="contact" netlify>
<div class="field">
  <label class="label">お名前</label>
  <div class="control">
    <input class="input" type="text" placeholder="例）山田　太郎">
  </div>
</div>

<div class="field">
  <label class="label">メールアドレス</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="例）email" placeholder="yamada@crowdcast.jp" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <!--p class="help is-danger">This email is invalid</p-->
</div>

<div class="field">
  <label class="label">お問い合わせ内容</label>
  <div class="control">
    <div class="select">
      <select>
        <option>その他</option>
        <option>応募について</option>
        <option>取材のご依頼</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>
<div class="field is-grouped">
  <div class="control">
    <button class="button is-medium is-primary is-outlined pl5 pr5">送信する</button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div>
</form>
