'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/LanguageProvider'

/**
 * What this site collects, which is almost nothing, and where the almost goes.
 *
 * Written because the site was marketing to Spain in Spanish, declaring
 * `areaServed: Spain` in its structured data, and shipping whatever a visitor
 * typed into the chat box to OpenAI, with no notice anywhere that either thing
 * was happening. The NEVA Estudio case study on this same site advertises
 * building "the Spanish legal pages required by law: privacy, cookies,
 * accessibility, legal notice" for a client. Not having them here was the one
 * gap on this site a knowledgeable reader would hold against it.
 *
 * **Every claim below is a fact about the code, not a template sentence.** No
 * analytics package is loaded, `/contact` is a mailto and a Calendly link
 * rather than a form, and there is no database on this project at all. If any
 * of that changes, this page changes in the same commit, because a privacy
 * policy that describes an older version of the site is worse than none: it is
 * a specific untrue statement rather than a missing one.
 *
 * Bilingual inline rather than through translation keys. The policy is long
 * prose that exists once, and forty keys in `LanguageProvider` would put the
 * English and the Spanish in different files, which is how one of them ends up
 * saying something the other does not.
 */
export default function PrivacyPage() {
  const { language } = useLanguage()
  const es = language === 'es'

  const sections: { title: string; body: React.ReactNode }[] = es
    ? [
        {
          title: 'La versión corta',
          body: (
            <>
              <p>
                Esta web no tiene formularios, no carga analítica, y no hay base
                de datos detrás de ella. No se guarda nada sobre tu visita.
              </p>
              <p>
                Hay dos excepciones y las dos son cosas que tú decides usar: el
                chat y la reserva de llamada. Están explicadas abajo.
              </p>
            </>
          ),
        },
        {
          title: 'El chat',
          body: (
            <>
              <p>
                Si escribes en el chat, tu mensaje se envía a la API de OpenAI
                (modelo <code>gpt-4o-mini</code>) para generar la respuesta, y
                vuelve a tu pantalla. <strong>No se guarda aquí.</strong> No hay
                sitio donde guardarlo: este proyecto no tiene base de datos.
              </p>
              <p>
                OpenAI trata ese mensaje bajo sus propias condiciones, así que
                lo mismo que con cualquier chat: no escribas ahí nada
                confidencial, ni tuyo ni de tu empresa. Para eso está el correo.
              </p>
            </>
          ),
        },
        {
          title: 'Reservar una llamada',
          body: (
            <p>
              El botón de agendar lleva a Calendly, que es de otra empresa. Lo
              que pongas allí lo trata Calendly bajo su propia política. Yo
              recibo el nombre, el correo y la hora que hayas elegido, y lo uso
              para presentarme a la llamada.
            </p>
          ),
        },
        {
          title: 'Correo',
          body: (
            <p>
              Si me escribes a <strong>luis@iberiatechsolutions.com</strong>,
              guardo ese correo mientras hablamos y mientras haya trabajo en
              marcha, como cualquiera guarda su bandeja de entrada. No entra en
              ninguna lista, no se vende, y no se usa para escribirte de nada
              que no sea tu propio proyecto.
            </p>
          ),
        },
        {
          title: 'Cookies',
          body: (
            <>
              <p>
                <strong>Ninguna.</strong> Esta web no pone cookies: ni de
                publicidad, ni de analítica, ni de terceros, ni propias.
              </p>
              <p>
                Lo único que se guarda en tu navegador es el idioma que has
                elegido, en <code>localStorage</code>, para que la web no vuelva
                al inglés cada vez que cambias de página. Se queda en tu
                dispositivo, no se envía a ningún sitio, y lo borras vaciando
                los datos del navegador.
              </p>
            </>
          ),
        },
        {
          title: 'Tus derechos',
          body: (
            <p>
              Si estás en la UE o en el Reino Unido, el RGPD te da derecho a
              saber qué se tiene sobre ti, a que se corrija y a que se borre.
              Como aquí lo único que puede existir es un hilo de correo que tú
              has empezado, el ejercicio de esos derechos es un correo pidiendo
              que lo borre, y lo borro. Escribe a{' '}
              <strong>luis@iberiatechsolutions.com</strong>.
            </p>
          ),
        },
        {
          title: 'Quién responde de esto',
          body: (
            <p>
              IberiaTech Solutions LLC, sociedad de responsabilidad limitada
              registrada en Carolina del Sur (Estados Unidos), con domicilio en
              Charleston. Es la misma empresa que figura en el pie de esta web.
            </p>
          ),
        },
        {
          title: 'Cambios',
          body: (
            <p>
              Si la web empieza a recoger algo que hoy no recoge, esta página se
              cambia en el mismo commit que lo introduzca. Una política que
              describe una versión anterior de la web es peor que no tener
              ninguna.
            </p>
          ),
        },
      ]
    : [
        {
          title: 'The short version',
          body: (
            <>
              <p>
                This site has no forms, loads no analytics, and has no database
                behind it. Nothing about your visit is stored.
              </p>
              <p>
                There are two exceptions and both are things you choose to use:
                the chat and the call booking. Both are described below.
              </p>
            </>
          ),
        },
        {
          title: 'The chat',
          body: (
            <>
              <p>
                If you type in the chat, your message is sent to OpenAI&apos;s
                API (the <code>gpt-4o-mini</code> model) to generate a reply,
                and the reply comes back to your screen.{' '}
                <strong>It is not stored here.</strong> There is nowhere to
                store it: this project has no database.
              </p>
              <p>
                OpenAI handles that message under their own terms, so treat it
                like any other chat box and do not put anything confidential in
                it, yours or your employer&apos;s. Email is for that.
              </p>
            </>
          ),
        },
        {
          title: 'Booking a call',
          body: (
            <p>
              The scheduling button goes to Calendly, which is a different
              company. Whatever you enter there is handled by Calendly under
              their own policy. What reaches me is your name, your email and the
              time you picked, and I use it to turn up to the call.
            </p>
          ),
        },
        {
          title: 'Email',
          body: (
            <p>
              If you write to <strong>luis@iberiatechsolutions.com</strong>, I
              keep that email while we are talking and while there is work in
              progress, the way anyone keeps an inbox. It goes on no list, it is
              never sold, and it is not used to write to you about anything
              other than your own project.
            </p>
          ),
        },
        {
          title: 'Cookies',
          body: (
            <>
              <p>
                <strong>None.</strong> This site sets no cookies at all:
                no advertising cookies, no analytics cookies, no third-party
                cookies, and none of its own.
              </p>
              <p>
                The only thing kept in your browser is the language you chose,
                in <code>localStorage</code>, so the site does not revert to
                English every time you change page. It stays on your device, is
                never sent anywhere, and clearing your browser data removes it.
              </p>
            </>
          ),
        },
        {
          title: 'Your rights',
          body: (
            <p>
              If you are in the EU or the UK, the GDPR gives you the right to
              know what is held about you, to have it corrected, and to have it
              deleted. Since the only thing that can exist here is an email
              thread you started, exercising those rights is an email asking me
              to delete it, and I delete it. Write to{' '}
              <strong>luis@iberiatechsolutions.com</strong>.
            </p>
          ),
        },
        {
          title: 'Who is responsible',
          body: (
            <p>
              IberiaTech Solutions LLC, a limited liability company registered
              in South Carolina, United States, and based in Charleston. It is
              the same company named in the footer of this site.
            </p>
          ),
        },
        {
          title: 'Changes',
          body: (
            <p>
              If this site starts collecting something it does not collect
              today, this page changes in the same commit that introduces it. A
              policy describing an older version of a site is worse than no
              policy: it is a specific untrue statement rather than a missing
              one.
            </p>
          ),
        },
      ]

  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-700 dark:text-accent-400 font-medium mb-5">
            {es ? 'Privacidad' : 'Privacy'}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-ink-900 dark:text-ink-50 leading-[1.05] mb-8">
            {es ? 'Qué se recoge aquí' : 'What this site collects'}
          </h1>
          <p className="font-display text-xl md:text-2xl text-ink-700 dark:text-ink-300 leading-snug mb-16 prose-measure">
            {es
              ? 'Casi nada, y lo poco que sale de aquí está dicho por su nombre. Es corta porque la web es simple, no porque falte algo.'
              : 'Almost nothing, and the little that leaves this site is named. It is short because the site is simple, not because something has been left out.'}
          </p>

          <div className="space-y-12">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50 mb-3">
                  {s.title}
                </h2>
                <div className="space-y-3 text-ink-700 dark:text-ink-300 leading-relaxed prose-measure">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-16 pt-8 border-t border-ink-200 dark:border-ink-800 text-sm text-ink-500">
            {es ? 'Actualizado el 28 de agosto de 2026.' : 'Last updated 28 August 2026.'}{' '}
            <Link href="/contact" className="underline underline-offset-4 hover:text-ink-900 dark:hover:text-ink-100">
              {es ? 'Contacto' : 'Contact'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
