---
templateKey: contacts-page
path: /contacts/
title: お問い合わせ
---

弊社にご関心をお持ちいただきまして、ありがとうございます。
ご意見・ご相談、料金のお見積もりなど、お気軽にお問合わせください。
お問合せ内容の確認後、担当者よりご連絡させていただきます。

### お問い合わせ内容 *
例）400文字以内でご記入ください。

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
    <input class="input is-danger" type="email" placeholder="Email input" value="yamada@crowdcast.jp">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

  <p>
    <label>メールアドレス: <input type="email" name="email"></label>
  </p>


  <p>
    <label>お問い合わせ内容: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit" class="button is-medium is-primary is-outlined pl5 pr5 mt3">Send</button>
  </p>
</form>

<div class="text-center">
<a class="button is-medium is-primary is-outlined pl5 pr5 mt3" href="/contacts/">内容を確認する</a>
</div>
