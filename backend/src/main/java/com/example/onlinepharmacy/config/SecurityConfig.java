package com.example.onlinepharmacy.config;

import com.example.onlinepharmacy.security.JwtFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class SecurityConfig {
    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests().requestMatchers("/api/auth/**","/h2-console/**").permitAll()
            .anyRequest().authenticated()
            .and().headers().frameOptions().disable(); // for h2 console if used

        // Note: JwtFilter is registered as a bean and applied via WebSecurityCustomizer or once-per-request in production.
        return http.build();
    }
}
