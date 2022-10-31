package com.group4.finalproject.filter;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.ResponseBody;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.group4.finalproject.entities.AppUser;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Slf4j
public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
  
  private final AuthenticationManager authenticationManager;
  public static final String APPLICATION_JSON_VALUE = "application/json";
  
  @Override
  public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    log.info("username is {}", username);
    log.info("password is {}", password);

    UsernamePasswordAuthenticationToken authenticationToken = 
      new UsernamePasswordAuthenticationToken(username, password);

    return authenticationManager.authenticate(authenticationToken);
  }

  @Override
  protected void successfulAuthentication(HttpServletRequest request,
      HttpServletResponse response, FilterChain chain,
      Authentication authResult) throws IOException, ServletException {
    
    AppUser user = (AppUser)authResult.getPrincipal();

    Algorithm algorithm = Algorithm.HMAC256("ArtHub".getBytes());

    String token = JWT.create()
      .withSubject(user.getUsername())
      .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
      .withIssuer(request.getRequestURL().toString())
      .withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
      .sign(algorithm);
      

    // String refresh_token = JWT.create()
    //   .withSubject(user.getUsername())
    //   .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
    //   .withIssuer(request.getRequestURL().toString())
    //   .sign(algorithm);
     
    // Map<String, String> tokens = new HashMap<>();
    // tokens.put("access_token", token);
    // tokens.put("refresh_token", refresh_token);
    // response.setContentType(APPLICATION_JSON_VALUE);
    // new ObjectMapper().writeValue(response.getOutputStream(), tokens);

        
    response.setHeader("access_token", token);
   
   // response.addCookie(token);
    // String refresh_token = JWT.create()
    //   .withSubject(user.getUsername())
    //   .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
    //   .withIssuer(request.getRequestURL().toString())
    //   .sign(algorithm);

    // Map<String, String> tokens = new HashMap<>();
    // tokens.put("access_token", token);
    // tokens.put("refresh_token", refresh_token);
    // response.setContentType("application/json");
    // new ObjectMapper().writeValue(response.getOutputStream(), tokens);

    // // response.addCookie(token);
    // // responseBody.add("access_token", token);
    
    // response.setContentType("application/json");
    // response.setCharacterEncoding("UTF-8");
    // response.getWriter().write(
    //         "token"
    // );
    // // response.setContentType("text/html");
    // // response.setCharacterEncoding("UTF-8");
    // // response.getWriter().write(
    // //   "<script type='text/javascript'>onload=()=>{localStorage.setItem('jwt', '" + token.toString() + "');console.log(localStorage.getItem('jwt'));}</script>" +
    // //   "<h3>JWT HAS BEEN SET IN LOCAL STORAGE</h3>" +
    // //         "<p>{ 'token': '" + token.toString() + "'}</p>"
    // //         + "<p><a href='courses.html'>go to next page</a></p>"
    // // );
  
  }   

}
